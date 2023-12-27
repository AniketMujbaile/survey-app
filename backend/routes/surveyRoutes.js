import express from 'express';
const router = express.Router();
import { createSurvey, getAllSurveys } from '../controllers/surveyController.js';
//import checkUserAuth from '../middlewares/auth-middleware.js';

// Create a new survey
router.post('/', createSurvey);

// Get all surveys
router.get('/', getAllSurveys);

export default router;
