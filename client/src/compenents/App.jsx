import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import PlacesList from './PlacesList.jsx'
import dummyData from './dummyData.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get('/api/homes/:id/nearby')
    .then( (res) => {
      //to do
    })
    .catch( (err) => {
      console.error(err)
    });
  }

  render() {
    console.log(dummyData)
    return (
      <div>
        <h1>more places to stay</h1>
        <PlacesList data={dummyData[0]}/>
      </div>

    )
  }
}

export default App