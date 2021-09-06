import React from 'react'
import SimpleModal from './SimpleModal';

function LineList({ name, numbers, id, onCreateTicket }) {

  const onSelectedTicket = (ticket) => {
    onCreateTicket(ticket)
  }

  return (
    <div>
      <h3>{name}</h3>
      <p>{numbers}</p>
      <SimpleModal name={name} numbers={numbers} id={id} onSelected={onSelectedTicket}/>
    </div>
  );
}

export default LineList
