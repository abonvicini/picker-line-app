import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core'
import Modal from '@material-ui/core/Modal';
import Form from './Form';

const useStyles = makeStyles((theme) => ({

  paper: {
    position: 'absolute',
    bottom: 0,
    right:0,
    left:0,
    backgroundColor: theme.palette.background.paper,
    borderRadius: '1em',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2, 2, 2),

  }
}));

const SimpleModal = ({ name, numbers, id, onSelected, setLines, lines }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = (e) => {
   
    setOpen(true);
  };

  const handleClose = (e) => {
    
    setOpen(false);
  };

  const handleSubmit = (formName) => {
    onSelected({
      name: formName,
      lineID: id,
    })
    setOpen(false);
  }

  const body = (
    <div className={classes.paper}>
      <Form name={name} numbers={numbers} onSubmit={handleSubmit} id={id} setLines={setLines} lines={lines}/>
    </div>
  );

  return (
    <div>
      <Button variant="contained" color="primary" type="button" onClick={handleOpen}>
        Seleccionar
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        {body}
      </Modal>
    </div>
  );
}

export default SimpleModal;