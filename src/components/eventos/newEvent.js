import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { TextField } from '@material-ui/core';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default class NewEvent extends Component {

  constructor(){
    super();
    this.state = {
      name:'',
      description:'',
      cupos:0,
      price:0,
      dialogMessage: '',
      open:false
    }
  }

  handleOpenDialog = () => {
    this.setState({open:true})
  }

  handleCloseDialog = () => {
    this.setState({open:false})
  }


  validation = () => {
    const {name,description, cupos, price} = this.state;
    if(name.length > 0 && description.length > 10 && cupos > 0 && price > 0 ){
      this.setState({dialogMessage: 'Se ha registrado correctamente el evento'})
      let events = JSON.parse(localStorage.getItem('events'));
      let formObj = {
        name,
        description,
        cupos,
        price
      }

      events.push(formObj)
      localStorage.setItem('events', JSON.stringify(events))
      this.handleOpenDialog()

    }else{
      this.setState({dialogMessage: 'Porfavor completa correctamente los campos.'})
      this.handleOpenDialog()
    }
  }


  render() {
    const {name, description, cupos, price} = this.state
    return (
      <div>
           <AppBar position="static">
                <Toolbar>
                    <Link to="/eventos" underline="none">
                        <Button >
                                <i className="material-icons">
                                    keyboard_backspace
                                </i>
                        </Button>
                    </Link>
                    <Typography variant="h6" className="title">
                    Nuevo Evento
                </Typography>
                </Toolbar>
            </AppBar>
            <div className="newEvent-container">
              <Dialog onClose={this.handleCloseDialog} open={this.state.open}>
                <DialogTitle>Mensaje</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                 {this.state.dialogMessage}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleCloseDialog} color="primary" autoFocus>
                  Aceptar
                </Button>
              </DialogActions>
              </Dialog>
              <form className="newEventForm">
                <TextField
                  id="projectname"
                  label="Nombre del proyecto"
                  value={name}
                  fullWidth
                  onChange={(e) => this.setState({name:e.target.value})}
                />
                <TextField
                  id="projectdescripiton"
                  label="Descripción del proyecto"
                  value={description}
                  fullWidth
                  onChange={(e) => this.setState({description:e.target.value})}
                />
                <div>
                  <TextField
                    id="projectCupos"
                    label="Cupos"
                    value={cupos}
                    type="number"
                    onChange={(e) => this.setState({cupos:e.target.value})}
                  />
                  <TextField
                    id="projectPrice"
                    label="Precio"
                    value={price}
                    type="number"
                    onChange={(e) => this.setState({price:e.target.value})}
                  />

                </div>
                <Button onClick={this.validation}>
                  Registrar evento
                </Button>
              </form>
            </div>
      </div>
    );
  }
}
