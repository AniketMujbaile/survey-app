import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import connectDB from './config/db.js'
import bodyParser from 'body-parser'
import userRoutes from './routes/userRoutes.js'
import cors from 'cors'
import surveyRoutes from './routes/surveyRoutes.js';

const app = express()
 
// Middleware
app.use(bodyParser.json());

app.use(express.json())

// CORS Policy
app.use(cors())

const DATABASE_URL = process.env.DATABASE_URL
// Database Connection
connectDB(DATABASE_URL)

// Routes
app.use('/', userRoutes);
app.use('/api/surveys', surveyRoutes);
app.use('/api/user', userRoutes)

 
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
