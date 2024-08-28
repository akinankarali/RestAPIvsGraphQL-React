import './App.css';
import GraphQLComponent from './components/GraphQLComponent';
import RestfulComponent from './components/RestfulComponent';
import PerformanceComponent from './components/PerformanceComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <GraphQLComponent />
       <RestfulComponent />
      </header>

      <div className='Performance'>
        <PerformanceComponent />
      </div>
    </div>
  );
}

export default App;
