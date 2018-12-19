import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import logger from 'morgan';
import routes from './routes';

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(
  logger('tiny', {
    stream: fs.createWriteStream(path.join(`${__dirname}/../access.log`), { flags: 'a' }),
  }),
);
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(routes);
app.listen(PORT, () => {
  console.log(`Server started at ${process.env.HOSTNAME}:${PORT}...`);
});

export default app;
