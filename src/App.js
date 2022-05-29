import logo from './logo.svg';
import './App.css';
import Timer from './components/timer';
import { useState,useRef } from 'react';

function App() {
  const [value,setvalue]=useState(false)
  return (
    <div className="App">
     <Timer value={value} setvalue={setvalue}/>
    </div>
  );
}

export default App;
