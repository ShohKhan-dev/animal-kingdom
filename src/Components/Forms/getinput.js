import React, { useState } from 'react'
import Typography from "@mui/material/Typography"
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'

import TextField from '@mui/material/TextField'
import {Grid} from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { jsonServerUrl } from '../../config';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./getinput.css";

const api = jsonServerUrl;



const AddAnimal = () => {

    const navigate = useNavigate();


    const [firstName, setfirst] = useState('')
    const [lastName, setsecond] = useState('')
    const [title, setTitle] = useState('')
    const [avatar, setAvatar] = useState('')
    const [bio, setBio] = useState('')

    const [firstError, setfirstError] = useState(false)
    const [secondError, setsecondError] = useState(false)
    const [titleError, setTitleError] = useState(false)
    const [imgError, setImgError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)
  
    const handleSubmit = (e) => {
      e.preventDefault()

      setfirstError(false)
      setsecondError(false)
      setTitleError(false)
      setImgError(false)
      setDetailsError(false)

      if (firstName == '') {
        setfirstError(true)
      }

      if (lastName== '') {
        setsecondError(true)
      }
      
      if (title == '') {
        setTitleError(true)
      }

      if (avatar == '') {
        setImgError(true)
      }

      if (bio == '') {
        setDetailsError(true)
      }
      if (firstName && lastName && title && avatar && bio) {
          const stat = {firstName, lastName, title, avatar, bio};

          fetch(api, {
              method: "POST",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify(stat)
          }).then(() => {
            // console.log("Items are added!")
            toast.success("Item has been successfully ADDED!");
            navigate('/');

          })

      } 
    }


    return (

        <Container size="sm" sx={{mt:5}}>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>

    <Grid container direction="row" justify="center"  spacing={5} 

        justifyContent="center">
            
                <Grid item md={12}>
                    <Typography
                        variant="h3" 
                        color="textPrimary"
                        component="h1"
                        gutterBottom
                        >
                        Add new Animal
                    </Typography>  
                </Grid>
            
                <Grid item md={6}>
                <TextField 
                    onChange={(e) => setfirst(e.target.value)}
                    label="First Name" 
                    variant="outlined" 
                    color="primary" 
                    fullWidth
                    required
                    value={firstName}
                    error={firstError}
                />
            </Grid>

            <Grid item  md={6}>
                <TextField 
                    onChange={(e) => setsecond(e.target.value)}
                    label="Last Name" 
                    variant="outlined" 
                    color="primary" 
                    fullWidth
                    value={lastName}
                    required
                    error={secondError}
                />
            </Grid>


        <Grid item md={6}>
            <TextField 
                onChange={(e) => setTitle(e.target.value)}
                label="Title" 
                variant="outlined" 
                color="primary" 
                required
                fullWidth
                value={title}
                error={titleError}
            />
        </Grid>
        <Grid item md={6}>
            <TextField 
                onChange={(e) => setAvatar(e.target.value)}
                label="Image Url" 
                variant="outlined" 
                color="primary" 
                fullWidth
                
                required
                value={avatar}
                error={imgError}
            />
        </Grid>

        <Grid item md={6}>
        <TextField 
            onChange={(e) => setBio(e.target.value)}
            label="Bio"
            variant="outlined"
            color="primary"
            multiline
            rows={4}
            fullWidth
            value={bio}
            
            required
            error={detailsError}
            />
        </Grid>
        <Grid item md={6} >
            <Button
            type="submit" 
            color="primary" 
            variant="contained"
            >
            Add
            </Button>
        </Grid>

    </Grid>

</form>


        </Container>


    
    );
  };
  
  export default AddAnimal;
  