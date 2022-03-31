import './App.css';
import Options from './Options.js';
import { DATA } from './constants';

function App() {
  return (
    <div className="App">
      <Options options_data={DATA} />
    </div>
  );
}

export default App;
