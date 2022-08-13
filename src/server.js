import express from 'express';
import morgan from 'morgan';
import template from './template';

const app = express();
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true })); // Чтение body в request
app.use(express.json());

app.get('/', (req, res) => {
  const hello = 'Hello World';
  res.send(template({ path: req.originalUrl, hello }));
});

app.listen(3000, () => console.log('A server has been launched!'));
