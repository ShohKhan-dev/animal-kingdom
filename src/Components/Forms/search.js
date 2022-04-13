import React, {useState, useEffect} from "react";
import Avatar from '@mui/material/Avatar';

import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import { Link } from "react-router-dom";
import { jsonServerUrl } from "../../config";

import "../album.css";

const theme = createTheme();



export default function Search() {

    const [data, setData] = useState([]);
    const [query, setSearchText] = useState("");

    const loadAnimals = async () => {

        const api = jsonServerUrl+"?title_like="+query

        const response = await axios.get(api);
        setData(response.data);
        console.log(response.data)
    }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log(query);
    loadAnimals();

  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md" sx={{mb: 25}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <SearchIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Search Animals by their titles
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, mb: 5, width: '100%'}}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="search"
              label="Search"
              name="search"
              autoFocus
              onChange={(e) => setSearchText(e.target.value)}
            />
          </Box>
        </Box>

        <Grid container spacing={4}>

            {data && data.map((animal) => (
              
              <Grid item key={animal.id} xs={12} sm={6} md={4}>

                 <Link to={'/animal/'+animal.id } className="media">

                   

                  <Card className="contentCard"
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}
                  >

                  <img src={animal.avatar} className='avatar' onError={event => {
                                                                            event.target.src = "https://previews.123rf.com/images/lightwise/lightwise1508/lightwise150800076/44185374-page-d-erreur-404-not-found-concept-et-un-symbole-de-lien-cass%C3%A9-ou-mort-comme-un-chien-sortant-d-un-.jpg"
                                                                            event.onerror = null
                                                                          }}/>

                    <CardActionArea>
              
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                              {animal.title}
                            </Typography>
                            <Typography variant="h6">
                              {animal.firstName} {animal.lastName}
                              </Typography>
                            <Typography variant="body2" color="text.secondary" className="card-text">
                              {animal.bio}
                            </Typography>
                          </CardContent>
                    </CardActionArea>

                  </Card>


                 </Link>
                
                 
                
              </Grid>
            ))}
          </Grid>
        
      </Container>
    </ThemeProvider>
  );
}