import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const router = express.Router();
const jwt = require('jsonwebtoken');

const staticFiles = express.static(path.join(__dirname, '../../client/build'));
app.use(staticFiles);

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader.split(' ')[1];
  if (token === null) return res.sendStatus(401);
  
  jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

router.post('/login', (req, res) => {
  //Authentication
  const username = req.body.username;
  const user = { name : username };
  console.log(process.env.ACCESS_TOKEN);
  const access_token = jwt.sign(user, process.env.ACCESS_TOKEN);
  res.json(access_token);
});

const demo_content = [
  {
    username: 'user1',
    content: 'content1',
  },
  {
    username: 'user2',
    content: 'content2'
  }
];

router.get('/content', authenticateToken, (req, res) => {
  res.json(demo_content.filter(content => content.username === req.user.name));
});

app.use(router);

// any routes not picked up by the server api will be handled by the react router
app.use('/*', staticFiles);

app.set('port', (process.env.PORT || 3001));
app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`);
});
