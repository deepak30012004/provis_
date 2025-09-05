const ratelimiter=require('express-rate-limit');
const limiter=ratelimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes         
    max: 30, // Limit each IP to 100 requests per windowMs

    message: 'Too many requests, please try again later.',
});
module.exports=limiter;