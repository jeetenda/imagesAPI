import express from 'express';
import cookieParser from 'cookie-parser';
import { config } from 'dotenv';
import {} from 'dotenv/config.js';
import { STATUS_CODES } from './helpers/constants.js';
// import { authRoutes } from './routes/auth.routes.js';
import { AppError, handleError } from './helpers/error.js';
import formRouter from './routes/form.route.js'

config();


const app = express();

// middlewares
app.use(express.json());
app.use(cookieParser());

// routes
// authRoutes(app);
// userRoutes(app);

app.use('/form', formRouter)

// app.all('*', (req, _, next) => {
//   next(new AppError(`Can't find ${req.method} ${req.originalUrl} on this server!`, STATUS_CODES.NOT_FOUND));
// });

// centralized error handling
app.use((err, req, res, _) => {
  handleError(err, req, res, _);
});

// running the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running at ${PORT}`));


