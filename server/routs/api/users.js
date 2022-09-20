import express from "express";
const router = express.Router();

// Models
import User from '../../models/User.js';

// Conntrollers

// Requests
router.get('/registration', (req, res)=>{
    
    res.send("Registraion responded!")
});
router.post('/registration', async (req, res)=>{
    try{
        const user = new User(req.body);
        await user.save();
        console.log('Successfully saved! ',user);
        res.json(user);
    }catch(err){
        console.log("User creation failed! ", err);
        res.json(err);
    }
});

export default router;