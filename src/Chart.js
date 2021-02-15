import React, { Component ,useEffect,useState } from  'react';
import Chart from 'chart.js';
import { Line } from 'react-chartjs-2';
import { stock } from './Stock.js'
import { ThreeDRotationSharp } from '@material-ui/icons';

class StockRow extends Component {

    constructor(props) {
        super(props)
        this.state = {
            price: null,
            date: null,
            time: null,
            percent_change: null,
            dolla_change: null
        }
    }

    changeStyle () {
        return {
        color: (this.state.dolla_change > 0) ? '#4caf50' : '#e53935',
        fontSize: '0.8rem',
        marginLeft: 5
    }

      }
    applyData (data){
        this.setState({
            price: data.price.toFixed(2),
            date: data.date,
            time: data.time,
        });
        stock.getYesterdayClose(this.props.ticker, data.date, (yesterday) => {
            const dollar_change = (data.price - yesterday.price).toFixed(2);
            const percent_change = (100 * data.price / yesterday.price).toFixed(2);
            this.setState({
                dollar_change: `${dollar_change}`,
                percent_change: ` (${percent_change}%)`
            })
        })
    }

       componentDidMount() {
        stock.latestPrice(this.props.ticker, this.applyData.bind(this))
        }

render () {
    return (
        <li className="list-group-item">
                <b>{this.props.ticker}</b> ${this.state.price}
                <span className="change" style ={this.changeStyle()}>
                  {this.state.dollar_change}
                  {this.state.percent_change}
                </span>
        </li>
    )
}
}
/*
const StockGraph  = () => {
  
    costructor(props) {

    } 
    
    axios
    .get(url)
    .then(res => {
      console.log(res);
  })
  .catch(error => {
      console.log(error);
  });

    return (
        <div> 
            <Line
            data = {{
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            }
            }
            height={400}
            width={600}
            
            options={{
                maintainAspectRatio: false
            }}

            />
        </div>
    )
}
*/
export default StockRow