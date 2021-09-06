import React from 'react'
import Line from './Line'

function LineList({lines, availableLines, setLines }) {

  const handleCreateTicket = ({ name, lineID }) => {
    console.log(lineID)
    console.log(name)
  }


  return (
    <div>
      {availableLines.map(line => (
        <Line 
        id={line.id}
        name={line.name} 
        numbers={line.numbers}
        key={line.id}
        onCreateTicket={handleCreateTicket}
        setLines={setLines}
        lines={lines}
        />
      ))}
    </div>
  );
}

export default LineList
