import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(compression());
app.use(morgan('short'));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`- HTTP server listening on port ${PORT} -`);
});