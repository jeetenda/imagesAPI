import express from 'express';
import cookieParser from 'cookie-parser';
import { config } from 'dotenv';
import formRoute from './routes/form.route.js'
import { connection } from './config/db.config.js';
import cors from 'cors'

const PORT = process.env.PORT || 8000;
const DB_URL = process.env.DB_URL;

config();
const app = express();

// database connection
connection(DB_URL)

const corsOptions = {
    origin: '*', // Allow requests from any origin
  };
  

// middlewares
app.use(express.json());
app.use(cookieParser());
//app.use(cors())
app.use(cors(corsOptions));





// routes
app.use('/form', formRoute)

app.listen(PORT, () => console.log(`Server running at ${PORT}`));


