import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors' ;


import { DBconnection } from './database/datasource';
import api from './routes';

const app = express();

app.use(bodyParser.json()) ;
app.use(bodyParser.urlencoded()) ;
app.use(cors()) ;

app.use('', api) ;

const PORT = 4111 ;

DBconnection() ;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});