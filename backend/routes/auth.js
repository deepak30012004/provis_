const express = require('express');
const pool = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // You missed this import
const limiter = require('../middleware/ratelimiter');

// Import the io instance from server.js

const router = express.Router();













// Apply rate limiter to login
router.post('/login',limiter, async (req, res) => {
    const { username, password } = req.body;

    try {
        // ❌ Typo: 'cosnt' → ✅ 'const'
        const [rows] = await pool.query('SELECT * FROM user WHERE email = ?', [username]);

        if (rows.length === 0) {
            return res.status(401).json({ message: 'Invalid username or password111' });
        }

        const user = rows[0];

        // ✅ Await bcrypt comparison
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid username or pass' });
        }

        const token = jwt.sign(
            { id: user.userid, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );
     

        // io.emit('userLoggedIn', {
        //     email: user.email,
        //     role: user.role
        // });
        return res.status(200).json({
            token,
            user: {
                id: user.userid,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
