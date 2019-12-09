import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class VehicleCard extends Component {

  render() {

    return (

      <div key={1} > 
        <Card>
          <Card.Img variant="top" src={this.props.imageUrl} />
          <Card.Body>
            <Card.Title>{this.props.vehicle_model}</Card.Title>
            <Card.Subtitle > ${this.props.vehicle_price} per day <br/> 
            Berlin
            </Card.Subtitle>
            <Card.Text>
              {this.props.description}
            </Card.Text> 
          </Card.Body>
        </Card>
      </div>

    ) 
  }
}

export default VehicleCard;