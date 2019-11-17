import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class VehicleCard extends Component {

  render() {

    return (

      <div key={1} > 
        <Card>
          <Card.Img variant="top" src={"https://s29755.pcdn.co/wp-content/uploads/2019/08/2019_Top_Five_Class_5-Mack.jpg"} />
          <Card.Body>
            <Card.Title>{"Mack Class 8 Truck"}</Card.Title>
            <Card.Subtitle > ${200} per day <br/> 
            Berlin
            </Card.Subtitle>
            <Card.Text>
              {"This is a very popular new truck available for pickup from Spandau."}
            </Card.Text> 
          </Card.Body>
        </Card>
      </div>

    ) 
  }
}

export default VehicleCard;