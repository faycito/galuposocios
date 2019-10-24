import React, { Component } from 'react'
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import './style.css'



export default class OneType extends Component {

    constructor(){
        super();
        this.state = {

        }
    }


    render() {
        const {type} = this.props
        return (
            <div>
                <div className="image-profile-section">
                    <div className="image-profile">
                        {String(type)[0].toUpperCase()}
                    </div>
                        <Fab color="secondary" aria-label="edit">
                            <EditIcon/>
                        </Fab>
                </div>
                <div className="info-ctn">
                    <h3>Nombre {type === 'profesor' ? 'del' : 'de la'} {type}</h3>
                    <p>Ladies Latinas</p>
                    <h3>Dirección</h3>
                    <p>Calle Choquehuanca 382 - San Isidro</p>
                    <h3>Contacto</h3>
                    <p>+51 550 5500 - +511 990 009 990</p>
                </div>
            </div>
        )
    }
}
