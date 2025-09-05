const express= require('express');
const router= express.Router();
const bcrypt = require('bcrypt');
const pool = require('../db'); 
const verifyauth=require('../middleware/verifyauth');
const verifyrole = require('../middleware/verifyrole'); 
const transporter = require('../mailer');

const ratelimiter = require('../middleware/ratelimiter');

const transport= require('../mailer');

// const redis=require('redis');

// const redisclient=redis.createClient();

// redisclient.connect().then(()=> console.log('redisconnected'));














router.post('/addvisitor',ratelimiter,verifyauth,verifyrole('staff') ,async (req, res) => {
        const { name,ward,visitp,email,security } = req.body;
         const checkintime=new Date();
          const hours = checkintime.getHours();

        //   if(hours<1 || hours>24){
        //     return res.status(400).json({ message: 'Check-in is only allowed between 9 AM and 11 PM' });
        //   }
     
    

        try {
      
            await pool.query('INSERT INTO visitor (name, ward,purpose, email,security) VALUES (?, ?,?, ?, ?)', [name,ward, visitp, email,security]);
                // io.emit('newVisitor',{name});
               // await redisclient.del('vis');
             return res.status(201).json({ message: 'Visitor checked in successfully' });
        } catch (error) {
            console.error('Error checking in visitor:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }


    }
);


// Approve visitor - only warden
router.put('/approvevisitor/:id', ratelimiter, verifyauth, verifyrole('warden'), async (req, res) => {
    const visitorId = req.params.id;

    if (!visitorId) {
        return res.status(400).json({ message: 'visitorId is required in params' });
    }

    try {
        // Check if visitor exists
        const [visitorRows] = await pool.query('SELECT * FROM visitor WHERE id = ?', [visitorId]);
        if (visitorRows.length === 0) {
            return res.status(404).json({ message: 'Visitor not found' });
        }

        // Update the visitor status to 'approved'
        await pool.query('UPDATE visitor SET status = ? WHERE id = ?', ['approved', visitorId]);
        // io.emit('visitorApproved', { name: visitorRows[0].name });
        await transporter.sendMail({
            from: 'deepaksingh30012004@gmail.com',
            to: visitorRows[0].email,
            subject: 'Visitor Approved',
            text: `Dear ${visitorRows[0].name},\n\nYour visit has been approved by the warden. Please proceed to the designated area.\n\nThank you!`
        });

        return res.status(200).json({ message: 'Visitor approved successfully' });
    } catch (error) {
        console.error('Error approving visitor:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});



router.get('/getvisitor',verifyauth,async (req,res)=>{

    const key='vis';

    try{
        // const cachedata=await redisclient.get(key);

        // if(cachedata){
        //     return res.status(200).json(JSON.parse(cachedata));
        // }



      
const [rows] = await pool.query(`  SELECT id, name, ward, email, status, DATE_FORMAT(checkintime, '%Y-%m-%d %H:%i:%s') AS checkintime, security, purpose 
FROM visitor;
`);



        // await redisclient.setEx(key,60,(JSON.stringify(rows)));

         return res.status(200).json(rows);
    }
    catch(err){
        return res.json({msg:'issue'});
    }

}
);









// Export the router        
module.exports = router;
















