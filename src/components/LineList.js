import React, { useState } from 'react'
import Line from './Line'

function LineList() {
  const [lines, setLines] = useState([
    {
      name: 'Linea 1',
      numbers: '11 56 73',
      id: 1
    },
    {
      name: 'Linea 2',
      numbers: '54 66 70',
      id: 2
    },
    {
      name: 'Linea 3',
      numbers: '02 41 19',
      id: 3
    }
  ]);

  const handleCreateTicket = ({ name, lineID }) => {
    console.log(lineID)
    console.log(name)
  }


  return (
    <div>
      {lines.map(line => (
        <Line 
        id={line.id}
        name={line.name} 
        numbers={line.numbers}
        key={line.id}
        onCreateTicket={handleCreateTicket}
        />
      ))}
    </div>
  );
}

export default LineList
