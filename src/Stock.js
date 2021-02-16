import { iex }  from './IEXAPI.js'


export const stock = {

    fetchStock(ticker,callback) {
        fetch(stock.latestPriceURL(ticker))
        .then((response) => response.json())
        .then((data) => callback(stock.stockDataFormat(data)))
    },

    latestPrice: (ticker,callback) => {
        fetch(stock.latestPriceURL(ticker))
        .then((response) => response.json())
        .then((data) => callback(stock.formatPriceData(data)))
    },

    previousDay: (ticker,callback) => {
        fetch(stock.previousDayURL(ticker))
        .then((response) => response.json())
        .then((data) => callback(stock.formatPreviousPriceData(data)))
    },

    latestPriceURL: (ticker) => {
        return `${iex.base_url}/stock/${ticker}/intraday-prices?token=${iex.api_token}`
    },
 
    previousDayURL: (ticker) => {
        return `${iex.base_url}/stock/${ticker}/previous?token=${iex.api_token}`
    },

    formatPriceData: (data) => {
            const stockData = data[data.length -1]
            const formattedData ={}
            formattedData.price = stockData.close
            formattedData.date = stockData.date
            formattedData.time = stockData.label
            return formattedData
    },

    formatPreviousPriceData: (data) => {
        const stockData = data
        const formattedData ={}
        formattedData.price = stockData.close
        formattedData.date = stockData.date
        formattedData.time = stockData.label
        return formattedData
},

    stockDataFormat: (data) => {
        const stockData = data
        const formattedData ={
            mins:[],
            price:[],
            date:[],
        }
        
        for (var i = 0; i < 5; i++){
        formattedData.mins[i] = data[i].minute;
        formattedData.price[i] = data[i].close
        formattedData.date[i] = data[i].date
    }
        return formattedData
        
},

}