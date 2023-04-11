import React from 'react'
import './HotelListing.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import { imageListClasses } from '@mui/material';
import HotelListingCard from './HotelListingCard';
import SideNav from './SideNav';

const drawerWidth = 400;  //sidenav


function MainNav(props) {

    const { window } = props;
    const {setMobileOpen,mobileOpen} = props;
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  
    const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <Box
    component="nav"
    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    aria-label="mailbox folders"
  >
    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
    <Drawer
      container={container}
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: 'block', sm: 'none' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
      }}
    >
     <SideNav HotelDataNew={props.HotelDataNew} setData={props.setData} HotelData={props.HotelData}  />

    </Drawer>
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: 'none', sm: 'block' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
      }}
      open
    >
     <SideNav HotelDataNew={props.HotelDataNew} setData={props.setData} HotelData={props.HotelData}  />

    </Drawer>
  </Box>
  )
}

export default MainNav