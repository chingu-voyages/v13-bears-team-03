import React from 'react'
import { Component } from 'react';
import { CardColumns } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import VehicleCard from './VehicleCard'
import PageList from './PageList'
// import SearchBar from './SearchBar'
// import trucks1 from './FetchVariable'
import trucks2 from './TrucksList.json'

class VehicleList extends Component {

  state = {
    trucks2: trucks2,
    search_result: []
  }

  triggerList = () => {
    if (this.state.search_result.length > 0) {
      return this.state.search_result
    }
    else {
      return this.state.trucks2
    }
  }

  filterList = (event) => {

    let items = trucks2.filter((item) => {
      return item.vehicle_model.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    });

    this.setState({ search_result: items })

  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {

    const trucks = this.triggerList().map((truck) => <VehicleCard key={truck._id} {...truck} />)

    return (
      <div>
        <br />
        <div className="row justify-content-center">
          <h2>Vehicles</h2>
        </div>
        <br />
        <div className="col-md-12" align="left">

          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Search</Form.Label>
              <Form.Control type="search" name="search" onChange={this.filterList} placeholder="Enter vehicle name" />
            </Form.Group>
          </Form>

        </div>
        <br />
        <CardColumns>
          <div className="container">
            <div className="row" >
              <div className="col-md-12" align="left">
                {trucks}
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