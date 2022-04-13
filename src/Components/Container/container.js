
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import "./container.css"


const MainContainer = () => {
    return (
        <Box
            sx={{
                bgcolor: 'background.paper',pt: 8,pb: 6,
            }}
            >
            <Container maxWidth="sm">
                <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
                >
                Welcome to Animal Kingdom
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    Develop your own "Animal Kingdom" by adding new and unique animals!
                    Each animal has own role in Kingdom and all living together like one family.
                </Typography>
                <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
                >

                <Link to="/add" className="lnk-button add-button">
                    <Button variant="contained" startIcon={<AddIcon />}>Add Animal</Button>
                    
                </Link>

                <Link to="/search" className="lnk-button search-button">
                    <Button variant="outlined" startIcon={<SearchIcon />}>Search Animal</Button>
                    
                </Link>

                {/* <Button variant="outlined">Secondary action</Button> */}
                </Stack>
            </Container>
        </Box>  
      
    );
  };
  
  export default MainContainer;