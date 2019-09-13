import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import './style.css'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';



export default class RegistroPage extends Component {
    state = {
        name:'',
        email:'',
        password:'',
        academia:'academia',
        socio:'socio',
        profesor:'instructor',
        value:'academia'
    }

     handleChange(event) {
         console.log(event)
            this.state.value = event.target.value
        }

  render() {
    return (
      <div className="containerRegister">
          <h3>Registro</h3>
          <form className="registerForm">
            <TextField
                id="nombre"
                label="Nombre"
                value={this.state.name}
                onChange={(event) => this.setState({name:event.target.value})}
            />
            <TextField
                id="nombre"
                label="Correo electrónico"
                value={this.state.name}
                onChange={(event) => this.setState({email:event.target.value})}
            />
            <TextField
                id="nombre"
                label="Contraseña"
                type="password"
                value={this.state.name}
                onChange={(event) => this.setState({password:event.target.value})}
            />
            <div className="radiobtn">
                <FormControl component="fieldset">
                    <FormLabel component="legend">Tipo de Socio</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={this.state.value} onChange={(value) => {
                        this.setState({value:value.target.value})
                    }}>
                        <FormControlLabel value="academia" control={<Radio />} label="Academia" />
                        <FormControlLabel value="socio" control={<Radio />} label="Socio" />
                        <FormControlLabel value="profesor" control={<Radio />} label="Profesor" />
                    </RadioGroup>
                </FormControl>
            </div>
            <Button variant="outlined" className="button">
                        <Link to="/profile">Finalizar</Link>
                    </Button>
          </form>
      </div>
    );
  }
}
