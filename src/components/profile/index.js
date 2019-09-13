import React, { Component } from 'react';
import './style.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

export default class Profile extends Component {
  render() {
    return (
        <div className="profileContainer">
                  <AppBar position="static">
                  <Toolbar>

          <Typography variant="h6" className="title">
            Perfil
          </Typography>
        </Toolbar>
                    </AppBar>
        </div>
    );
  }
}
