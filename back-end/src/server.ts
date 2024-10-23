import express from 'express';
import dotenv from 'dotenv';
import './config/dbConfig';
import authRoutes from './routes/authenticationRoutes';

dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;



app.use('/user', authRoutes);



// Health check route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Server is healthy' });
});

// הרצת השרת
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
