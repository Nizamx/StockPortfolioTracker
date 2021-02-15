import { iex }  from './IEXAPI.js'

export const stock = {

    latestPrice: (ticker,callback) => {
        fetch(stock.latestPriceURL(ticker))
        .then((response) => response.json())
        .then((data) => callback(stock.formatPriceData(data)))
    },

    latestPriceURL: (ticker) => {
        return `${iex.base_url}/stock/${ticker}/intraday-prices?chartLast=1&token=${iex.api_token}`
    },

    formatPriceData: (data) => {
            const stockData = data[data.length -1]
            const formattedData ={}
            formattedData.price = stockData.close
            formattedData.date = stockData.date
            formattedData.time = stockData.label
            return formattedData
    },

    getYesterdayClose: (ticker, date, callback) => {
        fetch(stock.yesterdaysClosePriceURL(ticker,date))
        .then((response) => response.json())
        .then((data) => callback(stock.formatPriceData(data)))
        
    },

    yesterdaysClosePriceURL: (ticker,date) => {
        return `${iex.base_url}/stock/${ticker}/intraday-prices?chartLast=1&token=${iex.api_token}`
        //return `${iex.base_url}/stock/${ticker}/previous?chartLast=1&token=${iex.api_token}`
    },

}