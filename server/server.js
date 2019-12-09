import bodyParser from 'body-parser'
import express from 'express'
import path from 'path'
import {initDB, Users, Vehicles} from './seed_data';

initDB();
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const router = express.Router()

const staticFiles = express.static(path.join(__dirname, '../../client/build'))
app.use(staticFiles)

router.post('/login', (req, res) => {
  if(req.query.username && req.query.password){
    Users.find({'username': req.query.username, 'password': req.query.password}).exec( function (err, users) {
      if (err) {
        res.send("Error");
      }else{
        if(users.length == 1){
          res.send("Success");
        }else{
          res.send("Authentication failed");
        }
      }
    });
  }
});

router.get('/vehicles', (req, res) => {
  Vehicles.find((error, vehicles)=>{
    if(error){
      console.log(error);
      return handleError(error);
    }
    res.json(vehicles)
  });  
})

app.use(router)

// any routes not picked up by the server api will be handled by the react router
app.use('/*', staticFiles)

app.set('port', (process.env.PORT || 3001))
app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`)
})
