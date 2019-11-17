import React from 'react';
import './App.css';

export default () => {
  return (
    <div>
    <h1>Hello World!</h1>
    test</div>
    )
}

// class App extends Component {
//   state = { cities: [] }

//   async componentDidMount() {
//     const response = await fetch('/cities')
//     const cities = await response.json()

//     this.setState({ cities: cities })
//   }

//   render() {
//     return (
//       <div>
//         <ul>
//           {this.state.cities.map(city => {
//             return <li key={city.name}> <b>{city.name}</b>: {city.population}</li>
//           })}
//         </ul>
//       </div>
//     );
//   }
// }

// export default App;
