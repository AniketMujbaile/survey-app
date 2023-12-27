import mongoose from 'mongoose';

const surveySchema = new mongoose.Schema({
  name: String,
  gender: String,
  nationality: String,
  email: String,
  phoneNumber: String,
  address: String,
  message: String,
});

const Survey = mongoose.model('Survey', surveySchema);

export default Survey;
