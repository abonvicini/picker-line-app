import React from 'react'
import SimpleModal from './SimpleModal';

function Line ({ name, numbers, id, onCreateTicket, setLines, lines }) {

  const onSelectedTicket = (ticket) => {
    onCreateTicket(ticket)
  }

  return (
    <div>
      <h3>{name}</h3>
      <p>{numbers}</p>
      <SimpleModal name={name} numbers={numbers} id={id} onSelected={onSelectedTicket} setLines={setLines} lines={lines}/>
    </div>
  );
}

export default Line
