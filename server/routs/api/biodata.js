import express from 'express';
const router = express.Router();

// Import controllers
import {biodata} from '../../controllers/biodata.js';

// @route   Post api/biodata
// @desc    Post route for users biodata information
// @access  Protected

router.post('/biodata', biodata);

export default router;