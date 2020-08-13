import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();
// O express não entende JSON é necessário fazer a conversão;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
