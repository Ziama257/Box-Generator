import React, {useState} from 'react';
import './App.css';
import Box from './components/BoxGenerator';

function App() {
  const [boxColors, setBoxColors] = useState([]);
  return (
    <div className="App">
        <Box boxColors={ boxColors} setBoxColors={setBoxColors}/>
    </div>
  );
}

export default App;
