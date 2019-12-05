import React from 'react'
import { Component } from 'react';
import { CardColumns } from 'react-bootstrap';
import VehicleCard from './VehicleCard'
import PageList from './PageList'
import SearchBar from './SearchBar'
import trucks1 from './FetchVariable'
import trucks2 from './TrucksList.json'

class VehicleList extends Component {

  render() {

    const trucks =
    [
        "Semi-Trailer",
        "Straight Truck",
        "Tesla Truck",
        "Lowboy Truck"
    ];

    return (
      <div>
          <br />  
          <div className="row justify-content-center">
            <h2>Vehicles</h2>
          </div>
          <br />
          <div className="col-md-12" align="left"> 
                  <SearchBar content={trucks} />
                </div>
          <br />
          <CardColumns>
            {console.log(trucks1)}
            <div className="container">
              <div className="row" >
                <div className="col-md-12" align="left"> 
                  {<VehicleCard />} 
                </div>
              </div>
            </div>
          </CardColumns>

          <div className="row justify-content-center">
            <PageList />
          </div>
        
      </div>
    );
  }
  
}

export default VehicleList;