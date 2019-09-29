import React, { Component } from 'react';
import './style.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import OneType from './oneType'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';

import MoreVertIcon from '@material-ui/icons/MoreVert';
export default class Profile extends Component {

  constructor(){
    super();
    this.state = {
      tabs:[],
      value: 0,
      openMenu: false,
      anchor: null,
    }

    this.retrieveData();

  }

  retrieveData = async() => {
    let tabs =  await JSON.parse(localStorage.getItem('tabs'))
    this.setState({tabs})

  }

  handleChange = (event, value) => {
    this.setState({value})
    console.log("value: " + value)
  }

  handleClose = () => {
    this.setState({openMenu:false, anchor:null})
  }
  render() {
    const {tabs,value, openMenu,anchor} = this.state
    return (
      <div className="profileContainer">
        <AppBar position="static">
          <Toolbar>

            <Typography variant="h6" className="title">
              Perfil
          </Typography>
          <IconButton onClick={(e) => this.setState({openMenu: true, anchor:e.currentTarget })}>
            <MoreVertIcon
              color={"inherit"}
            />
          </IconButton>
          </Toolbar>
          <Menu
            id="app-menu"
            anchorEl={anchor}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}

            keepMounted
            open={openMenu}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.handleClose}>Ver eventos</MenuItem>
            <MenuItem onClick={this.handleClose}>Ver asistencias</MenuItem>
          </Menu>
        </AppBar>
        {
          tabs.length > 1 &&
          <Tabs value={value} onChange={this.handleChange} variant="fullWidth">
            {tabs.map((el, index) => {
              return (
                <Tab 
                  key={`tab${index}`}
                  label={el}
                />
              )
            })}
          </Tabs>
          
        }
        {
          tabs.length > 0 &&
            value === 0 ?
            <OneType
              type = {tabs[0]}
            /> :
            value === 1 ?
            <OneType
              type = {tabs[1]}
            
            /> :
            value === 2 ?
            <OneType
              type = {tabs[2]}
            
            /> : null

        }
      </div>
    );
  }
}
