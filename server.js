import config from 'config';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import palindromeRoutes from './app/routes/palindromeRoutes';

const app = express();

// cors
app.use(cors({origin: '*'}));
app.use(express.json());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use('/', palindromeRoutes);


export default app;
