import { Line } from 'react-chartjs-2';
import React, { Component ,useEffect,useState } from  'react';
import StockRow from './Chart';

class Chart extends Component{

    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: ['asdfasd','afsadfsa'],
                datasets:[
                    {
                        label:'pop',
                        data:[
                            131231,
                            13123123,
                            123231,
                            1231231,
                            13123,
                        ],
                        backgroundColor:[
                            'rgba(103,102,255,0.6'
                        ]
                    }
                ]
            }

        }
    }



   render(){
       return (
           <div className="chart">
               <Line 
               
               data={this.state.chartData}
               options={{
                   maintainAspectRatio: true
               }}  
               />
           </div>
       )
   }
}

export default Chart