import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PetsIcon from '@mui/icons-material/Pets';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Grid } from '@mui/material';
import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { red } from '@mui/material/colors';
import { useNavigate, Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { jsonServer } from '../../config';
import "./singleContent.css";


function copy() {
    const el = document.createElement('input');
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    toast.success("Successfully copied to Clipboard");
}



export default function SingleContent() {



    let {id } = useParams();

    const navigate = useNavigate();

    const api = jsonServer+"/"+id;

    const [data, setData] = useState([]);

        useEffect(() => {
            loadAnimal();
        }, [])

    const loadAnimal = async () => {
        const response = await axios.get(api);
        setData(response.data);
        
    }

    const deleteItem = () =>{
        fetch(api, {
            method: 'DELETE'
        }).then(() => {
            toast.success("Item has been successfully DELETED!");
            navigate('/');
        })
    }


    return (

        <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            marginTop={10}
            className="mainContent"
            style={{ minHeight: '100vh' }}>

    <Card sx={{ maxWidth: 700, height: '100%'}}>
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    <PetsIcon/>
                </Avatar>
                }
                action={
                    <>
                   
                    <Link to={'/animal/update/'+data.id } className="editing">
                        <IconButton aria-label="edit">
                            <EditIcon color="primary" />
                        </IconButton>

                    </Link>
                    
                    <IconButton aria-label="delete" onClick={deleteItem}>
                        <DeleteIcon sx={{ color: red[500] }}/>
                    </IconButton>
                    <IconButton aria-label="add to favorites" className='fav'>

                        <FavoriteIcon />
                    
                        
                    </IconButton>
                    <IconButton aria-label="share" onClick={ copy }>
                        <ShareIcon  color="primary"/>
                    </IconButton>
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    </>
                }
                
                title={data.title}
                subheader="April 13, 2022"
            />
            <img width="600" height="400" src={data.avatar} className='avatar' onError={event => {
                                                                            event.target.src = "https://previews.123rf.com/images/lightwise/lightwise1508/lightwise150800076/44185374-page-d-erreur-404-not-found-concept-et-un-symbole-de-lien-cass%C3%A9-ou-mort-comme-un-chien-sortant-d-un-.jpg"
                                                                            event.onerror = null
                                                                          }}/>
            <CardContent>
                <Typography variant="body1" color="text.secondary">
                {data.firstName} {data.lastName}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
               
            </CardActions>
            
                <CardContent>
                
                <Typography paragraph>
                    {data.bio}
                </Typography>
                
                </CardContent>
            
            </Card>

        </Grid>

    );
    }