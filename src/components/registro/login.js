import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './loginStyle.css';


export default class LoginPage extends Component {
    
    constructor(){
        super();
        this.state = {
            email:'',
            password: ''
        }
    }
    
    render() {
        return (
            <div className="container">
                <div className="login-ctn">
                    <img
                        src={require('../../assets/icon.png')}
                        alt="galupo app"
                        className="icon-reg"
                    />
                    <div className="loginRegister">
                        <form className="login-form">
                            <TextField
                                id="log-email"
                                label="Correo electrónico"
                                value={this.state.email}
                                onChange={(event) => this.setState({email:event.target.value})}
                                type="email"
                            />
                            <TextField
                                id="log-pass"
                                label="Contraseña"
                                value={this.state.password}
                                onChange={(event) => this.setState({password:event.target.value})}
                                type="password"
                            />
                        </form>
                    </div>
                    <Button className="register-btn">
                        <Link to="/registro">¿No tienes cuenta? Registrate aquí</Link>
                    </Button>
                    <div className="buttonctn">
                        <Button variant="outlined" className="button" onClick={() => {
                            let events = [];
                            localStorage.setItem('events', JSON.stringify(events));
                        }}>
                            <Link to="/profile">Ingresar</Link>
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}
