
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const Footer = () => {
    return (

        <Box sx={{ bgcolor: 'background.paper', pt: 10, pb:1 }} component="footer" bottom="0">
            
            <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
            >
            Developed by <strong>Shohjahon</strong> 
           
            </Typography>
        </Box>
    );
  };
  
  export default Footer;