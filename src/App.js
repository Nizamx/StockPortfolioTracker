import logo from './logo.svg';
import './App.css';
import Header from './Header'
import { getDailyChartForSymbol } from './ApiConnector';
import Chart from './Chart';

function App() {
 
  return (
    <div className="App">
      <div className="App-header">
      <Header />
      </div>

      <div className="App-body">
        <Chart />
      </div>
    </div>
  );
}

export default App;
