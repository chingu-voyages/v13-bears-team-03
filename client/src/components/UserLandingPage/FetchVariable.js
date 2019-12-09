import fetch from 'node-fetch'

let trucks1 = []

fetch('https://vehicles-end-point.herokuapp.com/vehicles')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      response.json().then(function(data) {
        trucks1.push(data);
        console.log(trucks1)
      });
    }
  )

  export default trucks1