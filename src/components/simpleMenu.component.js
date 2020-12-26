import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';


export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <MenuIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} fontSize='large' />

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}

      >
        <Link to="/" style={{ textDecoration: 'none' }}><MenuItem onClick={handleClose}>Home</MenuItem></Link>
        <Link to="/services" style={{ textDecoration: 'none' }}><MenuItem onClick={handleClose}>Services</MenuItem></Link>
        <Link to="/about" style={{ textDecoration: 'none' }}><MenuItem onClick={handleClose}>About</MenuItem></Link>
        <Link to="/contact" style={{ textDecoration: 'none' }}><MenuItem onClick={handleClose}>Contact</MenuItem></Link>

      </Menu>
    </div>
  );
}
