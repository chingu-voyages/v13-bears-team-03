import React from 'react'
import { Component } from 'react';
import { CardColumns } from 'react-bootstrap';
import { Form, Pagination } from 'react-bootstrap';
import VehicleCard from './VehicleCard'
// import trucks1 from './FetchVariable'
import trucks2 from './TrucksList.json'

class VehicleList extends Component {

  state = {
    trucks2: trucks2,
    search_result: [],
    active: 1,
    display_page: 10
  }

  triggerList = () => {
    if (this.state.search_result.length > 0) {
      return this.state.search_result
    }
    else {
      return this.state.trucks2
    }
  }

  pageChange = (event) => {
    this.setState({ active: parseInt(event.target.innerText, 10) }) 
  }

  pagination = () => {
    let items = []
    for (let number = 1; number <= Math.ceil(this.triggerList().length/10); number++) {
      items.push(
        <Pagination.Item key={number} active={number === this.state.active}>
          {number}
        </Pagination.Item>,
      );
    }

    return items
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
                {trucks.slice(this.state.display_page * (this.state.active-1), this.state.display_page * this.state.active )}
              </div>
            </div>
          </div>
        </CardColumns>

        <div className="row justify-content-center">
        <Pagination onClick={this.pageChange} size="lg">{this.pagination()}</Pagination>
        </div>

      </div>
    );
  }

}

export default VehicleList;