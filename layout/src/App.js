import React from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap/bootstrap.min.css';
import data from './user'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="card m-5 bg-info">
          <img className="card-img-top" src={data["results"]} alt="Une photo" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;