import * as React from 'react';
import {AppBar,Box} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useRouter } from "next/router";
import Image from "next/image";
import { makeStyles } from '@mui/styles';
import Logo from '../../../public/assets/images/LogoNew.png'
const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    
  },
  header_container:{
    background:'#004958 !important',
    // background:'#EDAEC0 !important',
  }
});
const pages = ['Sign Up', 'Log In', 'Forgot Password','Reset Password'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const Header = () => {
  const classes = useStyles();
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const LogoClick = () => {
    router.push({
      pathname: "/",
    });
  }

  const handleCloseNavMenu = (index) => {
    console.log(index);
     
    if(index==0){
      router.push({
        pathname: "/signup",
      });
    }
    else if(index==1){
      router.push({
        pathname: "/signin",
      });
    }
    else if(index==2){
      router.push({
        pathname: "/forgot-password",
      });
    }
    else{
      router.push({
        pathname: "/reset-password",
      });
    }
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky">
      <div className={classes.header_container}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div
            component="a"
            href="/"
            
          >
            <Image src={Logo} alt='' width={80} height={40} onClick={LogoClick} styles={{cursor:'pointer'}}/>
          </div>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClick={(e) => { handleCloseNavMenu(index) }}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page,index) => (
                <MenuItem key={page} onClick={(e) => { handleCloseNavMenu(key) }}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            
          >
            LOGO
          </Typography> */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page,index) => (
              <Button
                key={page}
                onClick={(e) => { handleCloseNavMenu(index) }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      </div>
    </AppBar>
  );
};
export default Header;
