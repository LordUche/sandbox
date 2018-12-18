import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import logger from 'morgan';
import routes from './routes';

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

if (process.env.NODE_ENV === 'development') app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(routes);
app.listen(PORT, () => {
  console.log(`Server started at ${process.env.HOSTNAME}:${PORT}...`);
});

export default app;
