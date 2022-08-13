import express from 'express';
import morgan from 'morgan';
import template from './template';
import { Hero } from './db/models';
import heroRouter from './router/heroRouter';
import studentRouter from './router/studentRouter';
import apiRouter from './router/apiRouter';

// import checkIp from './middleware/checkIp';

const app = express();
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true })); // Чтение body в request
app.use(express.json());
// app.use(checkIp);

app.use('/heroes', heroRouter); 
app.use('/students', studentRouter);
app.use('/api', apiRouter);

app.get('/test', (req, res) => {
  res.send(`This is a test page. Your IP is: ${req.ip}`);
});

app.get('/counter', async (req, res) => {
  res.send(template({ path: req.originalUrl }));
});

app.get('/', async (req, res) => {
  const heroes = await Hero.findAll();
  res.send(template({ path: req.originalUrl, heroes }));
});

app.listen(3000, () => console.log('A server has been launched!'));
