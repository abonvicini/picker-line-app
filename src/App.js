import React, { useState, useEffect } from 'react';
import './App.css';
import LineList from './components/LineList';

function App() {
  // agregar el setLines del useState cuando se utilice ya que no deja deployar.
  const [lines, setLines] = useState([
    {
      name: 'Linea 1',
      numbers: '11 56 73',
      id: 1,
      available: true
    },
    {
      name: 'Linea 2',
      numbers: '54 66 70',
      id: 2,
      available: true
      
    },
    {
      name: 'Linea 3',
      numbers: '02 41 19',
      id: 3,
      available: true
    }
  ]);



  const [availableLines, setAvailableLines] = useState ([]);

  useEffect (() => {
  
    setAvailableLines(lines.filter(line => line.available === true))
 
  },[lines])

  console.log(availableLines)
  console.log(lines)


  return (
    <div className="App">
      <LineList 
        lines={lines}
        setLines={setLines}
        availableLines={availableLines}
      />
    </div>
  );
}



export default App;
