import React, { useEffect,useState } from  'react';
import { CanvasJSChart } from 'canvasjs-react-charts';
import { getDailyChartForSymbol } from './ApiConnector';


const Chart = () => {
    const [stockData, setStockData] = useState([]);

    useEffect(() => {
        const fetchStockData = async () => {
          const result = await getDailyChartForSymbol('TSLA');

          setStockData(formatStockData(result.data['Time Series (Daily)']));
        };
        
        fetchStockData();
      }, []);

      console.log(stockData);

      return(
          <CanvasJSChart 
            options={ {
                data: [{
                    type: 'candlestick',
                    dataPoints: stockData.map(stockData => ({
                        x: new Date(stockData.date),
                        y: [
                            stockData.open,
                            stockData.high,
                            stockData.low,
                            stockData.close
                        ]
                    }))
                }]

            }}
          
          
          />
        
        );
    
};

function formatStockData(stockData) {
    return Object.entries(stockData).map(entries => {
        const [date,priceData] = entries;

        return {
            date,
            open: Number(priceData['1. open']),
            high: Number(priceData['2. high']),
            low: Number(priceData['3. low']),
            close: Number(priceData['4. close'])
        }

    });
};

export default Chart;