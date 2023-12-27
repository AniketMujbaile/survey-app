import Survey from '../models/Survey.js';

const createSurvey = async (req, res) => {
  try {
    const survey = new Survey(req.body);
    await survey.save();
    res.status(201).json(survey);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllSurveys = async (req, res) => {
  try {
    const surveys = await Survey.find();
    res.json(surveys);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { createSurvey, getAllSurveys };
