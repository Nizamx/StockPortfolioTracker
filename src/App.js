import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import StockRow from './Chart';
import { responsiveFontSizes } from '@material-ui/core';
import { StyleSheet, View, Text, TextInput } from "react-native";
import Graph from './Graph.js';

 /*
          <div className="card">
            
              <ul className="list-group list-group-flush">
                
              </ul> 
          </div>
          <StockRow ticker="GOOG" />
                  <StockRow ticker="MSFT" />
                  <StockRow ticker="TSLA" />
          */

function App() {
  return (
  <View style={styles.container}>
        <View style={styles.rectRow}>
          <View style={styles.rect}>
            <Text style={styles.portfolio}>Portfolio</Text>
            <Text style={styles.value}>$100,000</Text>
            <Text> 
                  <StockRow ticker="AAPL" />
                  
            </Text>
            <View style={styles.rect4}></View>
          </View>
          <View style={styles.rect2}>
            <TextInput placeholder="Ticker" style={styles.GraphTicker}></TextInput>
            <TextInput placeholder="Price" style={styles.GraphPrice}></TextInput>
            <Graph />
          </View>
        </View>
      </View>


    /*<div className="App">
      <div className="container">
        <div className="col-md-5 mt-5">
          <div className="card">
              <ul className="list-group list-group-flush">
                <StockRow ticker="AAPL" />
                <StockRow ticker="GOOG" />
                <StockRow ticker="MSFT" />
                <StockRow ticker="TSLA" />
                
              </ul> 
          </div>
        </div>
      </div>   
      <div className="container">
      <div className="col-md-5 mt-5">
          <div className="card">
          </div>
          </div>
      </div>
    </div>
    */
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  rect: {
    width: 289,
    height: 462,
    backgroundColor: "#E6E6E6"
  },
  portfolio: {
    fontFamily: "roboto-700",
    color: "rgba(133,132,132,1)",
    fontSize: 21,
    opacity: 0.59,
    textAlign: "left",
    marginTop: 19,
    marginLeft: 103
  },
  value: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 31,
    textAlign: "left",
    marginTop: 17,
    marginLeft: 70
  },
  rect4: {
    width: 230,
    height: 56,
    backgroundColor: "#E6E6E6",
    borderWidth: 0,
    borderColor: "#000000",
    borderStyle: "solid",
    marginTop: 89,
    marginLeft: 30
  },
  rect2: {
    width: 865,
    height: 506,
    backgroundColor: "#E6E6E6",
    marginLeft: 32
  },
  GraphTicker: {
    fontFamily: "verdana-regular",
    color: "#121212",
    fontSize: 20,
    width: 60,
    height: 24,
    marginTop: 27,
    marginLeft: 762
  },
  GraphPrice: {
    fontFamily: "verdana-regular",
    color: "#121212",
    fontSize: 20,
    width: 87,
    height: 16,
    marginTop: -20,
    marginLeft: 30
  },
  rectRow: {
    height: 606,
    flexDirection: "row",
    flex: 1,
    marginRight: 93,
    marginLeft: 87,
    marginTop: 77
  },
  stocks: {
    backgroundColor: "#E6E6E6"
  },
});

export default App;
