import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Button from '@material-ui/core/Button';
import './style.css'
import schedule from '../../assets/schedule.png'
import { Link } from 'react-router-dom'

export default class HomePage extends Component {
    state = {

    }

    responsive = {
        0: {items:1},
        1024: {items:1}
    }


    render() {
        return (
            <div className="container"> 
                <AliceCarousel
                    responsive={this.responsive}
                    autoPlayInterval={3000}
                    autoPlayDirection="ltr"
                    autoPlay={false}
                    fadeOutAnimation={true}
                    mouseDragEnabled={true}
                    buttonsDisabled={true}
                    
                >
                    <div className="swiper-content">
                        <h3>Gestionar tus asistencias</h3>
                        <img
                            src={schedule}
                            alt="horario"
                        />
                    </div>
                    <div className="swiper-content">
                        <h3>Ser más Vistos</h3> 
                        <img
                            src={schedule}
                            alt="vistos"
                        />
                    </div>
                    <div className="swiper-content">
                        <h3>Anunciar tus Eventos</h3> 
                        <img
                            src={schedule}
                            alt="eventos"
                        />
                    </div>
                </AliceCarousel>
                <div className="buttonctn">
                    <Button variant="outlined" className="button">
                        <Link to="/login">Continuar</Link>
                    </Button>
                </div>
            </div>
        );
    }
}
