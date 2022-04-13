import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PetsIcon from '@mui/icons-material/Pets';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

import "./header.css";


const Header = () => {
    return (

      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            
            color="inherit"
            aria-label="menu"
          >
            <PetsIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" className="Header-link">
                <span className="header">
                    AnimalKingdom
                </span>
            </Link>
          </Typography>

          <IconButton color="inherit" sx={{mr:2}}> 
            <Link to="/search" className="Header-link">
                <SearchIcon />
            </Link>
          </IconButton>

          <IconButton color="inherit" sx={{mr:10}}> 
            <Link to="/add" className="Header-link">
                <AddIcon />
            </Link>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
           
    );
  };
  
  export default Header;
  