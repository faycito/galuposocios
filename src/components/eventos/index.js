import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './style.css';


export default class EventosPage extends Component {

    galupoEvents = [1,2,3,4,5,6,7,8,9,10,11]

    _renderCard = () => {
        return (
            <div className="galupo-Card">
                <div className="galupo-card-container">
                    <div className="card-title-banner">
                        <label>Clases de baile de salsa</label>
                    </div>
                    <img
                        src="https://www.goandance.com/es/media/images-manager/Blog/Mujeres-bailando-en-escuela-de-baile.jpg"
                        alt=""
                        className="galupo-card-image"
                    />
                    <div className="galupo-card-description">
                        <label>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ante nunc. Etiam tempor egestas turpis</label>
                    </div>
                </div>
            </div>
        )
    }

    constructor(props){
        super(props);
        this.state={

        }
    }
    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                    <Button >
                        <Link to="/profile">
                            <i className="material-icons">
                                keyboard_backspace
                            </i>
                        </Link>
                    </Button>
                        <Typography variant="h6" className="title">
                        Eventos
                    </Typography>
                    </Toolbar>
                </AppBar>
                <div className="events-container">
                    <div className="galupo-list">
                        {
                            this.galupoEvents.map((element, index) => {
                                return this._renderCard()
                            }) 
                        }
                    </div>
                </div>
            </div>
        );
    }
}
