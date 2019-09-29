import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import './style.css'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';

import FormLabel from '@material-ui/core/FormLabel';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';




export default class RegistroPage extends Component {
    state = {
        name:'',
        email:'',
        password:'',
        academia:false,
        socio:false,
        profesor:false,
        value:'academia',
        academiaName:'',
        academiaRuc:'',
        academiaRep:'',
        academiaAddress:'',
        adademiaPhone:'',
        acadAddLat:'',
        acadAddLng:'',
        profDNI:'',
        profAcad:'',
        profAdd:'',
        profPhone:'',
        profName:'',
        socioName:'',
        socioCode:''
    }

    saveData = () => {
        let tabs = [];
        const {academia, socio, profesor} = this.state
        academia && tabs.push('academia')
        socio && tabs.push('tienda')
        profesor && tabs.push('profesor')
        
        console.log(JSON.stringify(tabs))
        localStorage.setItem('tabs', JSON.stringify(tabs));
    }

     handleChange(event) {
         console.log(event)


        }

    render() {
        return (
            <div className="containerRegister">
                <div className="back-icon-reg">
                    <Button >
                        <Link to="/login">
                            <i className="material-icons">
                                keyboard_backspace
                            </i>
                        </Link>
                    </Button>
                </div>
                    <h3>Registro</h3>
                <form className="registerForm">
                    <TextField
                        id="nombre"
                        label="Nombre"
                        value={this.state.name}
                        onChange={(event) => this.setState({name:event.target.value})}
                    />
                    <TextField
                        id="correo"
                        label="Correo electrónico"
                        value={this.state.email}
                        onChange={(event) => this.setState({email:event.target.value})}
                    />
                    <TextField
                        id="password"
                        label="Contraseña"
                        type="password"
                        value={this.state.name}
                        onChange={(event) => this.setState({password:event.target.value})}
                    />
                    <div className="radiobtn">
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Tipo de Socio</FormLabel>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox checked={this.state.academia} onChange={(e) => {
                                        this.setState({academia:e.target.checked})
                                    }} value="academia" />}
                                    label="Academia"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={this.state.profesor} onChange={(e) => {
                                        this.setState({profesor:e.target.checked})
                                    }} value="profesor" />}
                                    label="Profesor"
                                />
                                <FormControlLabel
                                    control={
                                    <Checkbox checked={this.state.socio} onChange={(e) => {
                                        this.setState({socio:e.target.checked})
                                    }} value="socio" />
                                    }
                                    label="Tienda"
                                />
                            </FormGroup>
                        </FormControl>
                    </div>
                    {
                        this.state.academia &&
                        <div id="reg-form-acad" className="form-reg">
                            <h3>Academia</h3>
                            <TextField
                                id="academia"
                                label="Nombre institucional"
                                type="text"
                                value={this.state.academiaName}
                                onChange={(e) => this.setState({academiaName:e.target.value})}
                            />
                            <TextField
                                id="RUC"
                                label="RUC"
                                type="number"
                                value={this.state.academiaRuc}
                                onChange={(e) => this.setState({academiaRuc:e.target.value})}
                            />
                            <TextField
                                id="gerenteGAcademia"
                                label="Representante Legal"
                                type="text"
                                value={this.state.academiaRep}
                                onChange={(e) => this.setState({academiaRep:e.target.value})}
                            />
                            <TextField
                                id="acad-address"
                                label="Dirección"
                                type="text"
                                value={this.state.academiaAddress}
                                onChange={(e) => this.setState({academiaAddress:e.target.value})}
                            />
                            <div id="lat-long-acad-reg">
                                <TextField
                                    id="lat"
                                    label="latitud"
                                    type="number"
                                    value={this.state.acadAddLat}
                                    onChange={(e) => this.setState({acadAddLat:e.target.value})}
                                />
                                <TextField
                                    id="long"
                                    label="longitud"
                                    type="number"
                                    value={this.state.acadAddLng}
                                    onChange={(e) => this.setState({acadAddLng:e.target.value})}
                                />
                            </div>
                            <TextField
                                id="acad-phone"
                                label="Telefono"
                                type="number"
                                value={this.state.adademiaPhone}
                                onChange={(e) => this.setState({adademiaPhone:e.target.value})}
                            />
                        </div>
                    }
                    {
                        this.state.profesor &&
                        <div className="form-reg">
                            <h3>Profesor</h3>
                            <TextField
                                id="profesor-name"
                                label="Nombre"
                                type="text"
                                
                                value={this.state.profName}
                                onChange={(e) => this.setState({profName:e.target.value})}
                            />  
                            <TextField
                                id="profesor-add"
                                label="Direccion"
                                type="text"
                                
                                value={this.state.profAdd}
                                onChange={(e) => this.setState({profAdd:e.target.value})}
                            />  
                            <TextField
                                id="profesor-phone"
                                label="Telefono"
                                type="number"
                                
                                value={this.state.profPhone}
                                onChange={(e) => this.setState({profPhone:e.target.value})}
                            />  
                            <TextField
                                id="profesor-acad"
                                label="Nombre de academia"
                                type="text"
                                
                                value={this.state.profAcad}
                                onChange={(e) => this.setState({profAcad:e.target.value})}
                            />  
                            <TextField
                                id="profesor-dni"
                                label="DNI"
                                type="number"
                                
                                value={this.state.profDNI}
                                onChange={(e) => this.setState({profDNI:e.target.value})}
                            />  
                        </div>
                    }
                    {
                        this.state.socio &&
                        <div className="form-reg">
                            <h3>Tienda</h3>
                            <TextField
                                id="socio-name"
                                label="Nombre de tienda"
                                type="text"
                                
                                value={this.state.socioName}
                                onChange={(e) => this.setState({socioName:e.target.value})}
                            />  
                            <TextField
                                id="socio-code"
                                label="Dirección de tienda"
                                type="text"
                                
                                value={this.state.socioCode}
                                onChange={(e) => this.setState({socioCode:e.target.value})}
                            />  
                        </div>
                    }
                    <Button variant="outlined" className="button" >
                                <Link to={{pathname:"/profile", state:{
                                    acadName:this.state.academia ? this.state.academiaName : null,
                                    profName: this.state.profesor ? this.state.profName : null,

                                }}}
                                onClick={this.saveData}
                                >Finalizar</Link>
                            </Button>
                </form>
            </div>
        );
    }
}
