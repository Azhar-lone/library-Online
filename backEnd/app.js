//Importing dependencies
import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import path from "path"
// Importing route handlers
import userRouter from './server/Routes/userRoutes.js';
import bookRouter from './server/Routes/bookRoutes.js';
import reviewRouter from './server/Routes/reviewRoutes.js';
import searchRouter from "./server/Routes/searchRoutes.js"
import aboutUsRouter from './server/Routes/aboutUsRoutes.js';
//initializing express app
const app = express();

// CORS setup for allowing requests from the specified origin 
// development only
app.use(
  cors({
    origin: process.env.FrontEndUri,
    credentials: true,
    methods: ['POST', 'GET', 'DELETE', 'PATCH', 'PUT'],
  })
);

app
  // Middlewares for parsing cookies, JSON, and URL-encoded data
  .use(cookieParser())
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  // for Handling FrontEnd
  .use(express.static(path.resolve("dist")))
  // Routing configuration
  .use('/user', userRouter)
  .use('/book', bookRouter)
  .use('/review', reviewRouter)
  .use("/search", searchRouter)
  .use("/aboutus", aboutUsRouter)
// Handling 404 Not Found
app.use((req, res) => {
  res.status(404).json({
    msg: 'Requested page not found',
  });
});

// Setting up the server to listen on the specified port
const port = process.env.PORT || 3000; // Using a default port if not specified
app.listen(port, () =>
  console.log(`Server is listening on http://localhost:${port}`)
);

// Connecting to the MongoDB database
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log('Connected to the database successfully');
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err.message);
  });
