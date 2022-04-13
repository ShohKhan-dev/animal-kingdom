import React, {useState, useEffect} from "react";

import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { CardActionArea } from '@mui/material';
import { jsonServerUrl } from "../config";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";

import "./album.css";

import axios from "axios";

import MainContainer from './Container/container';

const api = jsonServerUrl;

const theme = createTheme();

export default function Album() {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadAnimals();
  }, [])

  const loadAnimals = async () => {
    const response = await axios.get(api);
    setData(response.data);

  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Container */}

        <MainContainer/>


        {/* End Container */}
        
        <Container sx={{ py: 8 }} maxWidth="md">
          
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
      </main>
      
    </ThemeProvider>
  );
}