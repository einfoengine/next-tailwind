import express from "express";
const router = express.Router();

// Models


// Conntrollers

import {Register} from '../../controllers/register.js';

// Requests
router.get('/registration', (req, res)=>{
    res.send("Registraion responded!")
});

router.post('/registration', Register);

export default router;