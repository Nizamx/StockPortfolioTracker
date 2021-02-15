import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import StockGraph from './Chart';
import { responsiveFontSizes } from '@material-ui/core';


function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="col-md-5 mt-5">
          <div className="card">
              <ul className="list-group list-group-flush">
                <StockGraph ticker="AAPL" />
                <StockGraph ticker="GOOG" />
                <StockGraph ticker="MSFT" />
                <StockGraph ticker="TSLA" />
                
              </ul> 
          </div>
        </div>
      </div>   
    </div>
  );
}

/*
  <table className="table mt-5">
          <thread>
            <tr>
            <th>Ticker</th> 
            <th>Price</th> 
            <th>Date</th> 
            <th>Time</th> 
          </tr>
          </thread>
          <tbody>
          <StockGraph ticker="aapl"/>
          <StockGraph ticker="goog"/>
          <StockGraph ticker="msft"/>
          <StockGraph ticker="tsla"/>
          </tbody>
        </table>
        */
export default App;
