import React from 'react'
import '../style/Header.css'
import logo from '../assets/logo.svg'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { BorderAll } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
    root: {
      backgroundColor:'white',
      borderRadius:'20px',
      width:'20%'
    },
  }));

    

function Header() {
    const classes = useStyles();
    return (
        <div className='header__appointment'>
            <div className="header__appointment__left">
                <img src={logo}/>
            </div>
            <div className="header__appointment__right">
                <Button 
                className={classes.root}>Call Now</Button>
            </div>
        </div>
    )
}

export default Header
