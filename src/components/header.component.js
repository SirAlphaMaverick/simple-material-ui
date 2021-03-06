import React, { Component } from 'react'
import { AppBar, Button, Hidden, IconButton, Paper, Toolbar } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import PublicRoundedIcon from '@material-ui/icons/PublicRounded';
import Background from '../background.jpeg';
import Typography from '@material-ui/core/Typography';
import SimpleMenu from './simpleMenu.component';
import { Link } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <div>
                <Grid container style={{ backgroundImage: `url(${Background})`, color: '#fff' }}>


                    <Hidden lgUp='true'>



                        <AppBar position="static" color='transparent'>
                            <Toolbar>
                                <IconButton edge="start" color="inherit" aria-label="menu">
                                    <SimpleMenu />
                                </IconButton>
                                <Typography variant="h5" >
                                    This is a Dummy Company Name!
            </Typography>
                            </Toolbar>
                        </AppBar>


                    </Hidden>

                    <Hidden mdDown='true'>
                        <Grid item md={10} lg={10}>

                            <h1 >This is a Dummy Company Name!</h1>
                        </Grid>
                    </Hidden>
                    <Hidden mdDown='true'>

                        <Grid item md={2} style={{ padding: 0, margin: 0 }}>
                            <Button variant='text' size='small' style={{ backgroundImage: `url(${Background})`, color: '#fff' }}>
                                <PublicRoundedIcon />
                Available Across the Globe
            </Button>
                        </Grid>

                        <Grid item md={8}>
                        </Grid>
                        <Grid item md={1}>
                        <Link to="/" style={{ textDecoration: 'none' }}><Button variant="contained" size='large' >Home</Button></Link>
                        </Grid>
                        <Grid item md={1} >
                        <Link to="/services" style={{ textDecoration: 'none' }}> <Button variant="contained" size="large" color="default">Services</Button></Link>
                        </Grid>

                        <Grid item md={1}>
                        <Link to='/about' style={{ textDecoration: 'none' }}><Button variant="contained" size="large" color="default">About</Button></Link>
                        </Grid>

                        <Grid item md={1}>
                        <Link to="/contact" style={{ textDecoration: 'none' }}><Button variant="contained" size="large" color="default" >Contact</Button></Link>
                        </Grid>

                    </Hidden>

                </Grid>
            </div>
        )
    }
}
