import React, { useState } from 'react'
import { Divider, TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2,),
      width: '95%',
    },
  }
}));



function Form({ name, numbers, onSubmit, setLines, lines, id }) {

  const [formName, setFormName] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formName)
    setLines(
      lines.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            available: !item.available
          }
        }
        return item;
      })
    )
  }

  const handleChange = (event) => {
    event.preventDefault();
    setFormName(event.target.value)
  }

  const classes = useStyles();
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <h3>Detalle:</h3>
        <p>
          Usted a seleccionado la {name} que contiene los siguientes numeros {numbers}
        </p>
        <Divider />
        <TextField id="standard-basic" label="Ingrese su nombre" value={formName} onChange={handleChange} />
        <Button size="large" variant="contained" color="primary" type='submit'  >
          Confirmar
        </Button>

      </form>


    </div>
  )
}

export default Form
