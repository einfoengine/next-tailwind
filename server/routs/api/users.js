import express from "express";
const router = express.Router();


// Conntrollers
import {Register} from '../../controllers/register.js';

// Requests

router.post('/registration', Register);

export default router;