import bodyParser from 'body-parser'
import express from 'express'
import path from 'path'
import {initDB, Vehicles} from './seed_data'
import mongoose from 'mongoose';

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const router = express.Router()

const staticFiles = express.static(path.join(__dirname, '../../client/build'))
app.use(staticFiles)

// Initiating mock data
initDB();

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
