import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authenticationRoutes from './routers/authenticationRoutes';
import './config/dbConfig';



dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT;



app.use(cors({
  origin: [`http://localhost:${port}`, `http://127.0.0.1:${port}`]
}));



app.use('/authentication', authenticationRoutes);
// app.use('/test', testRoutes);



// Health check route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Server is healthy' });
});


// Run Server
const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


// Function to close the server
function closeServer() {
  server.close(() => {
    console.log(`Server on port ${port} is now closed.`);
    process.exit(0); // Ensure the process exits to free the port
  });
}


// Automatically close the server on exit signals
['SIGTERM', 'SIGINT', 'SIGUSR2'].forEach(signal => {
  process.on(signal, () => {
    console.log(`Received ${signal}, closing server...`);
    closeServer();
  });
});
