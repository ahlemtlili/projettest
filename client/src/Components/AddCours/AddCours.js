import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCours } from '../../Redux/actions/coursActions';
import { Link as LinkR} from "react-router-dom";


const theme = createTheme();

export default function AddCours() {
 const dispatch = useDispatch()
 const navigate = useNavigate()
 const [image, setImage] = React.useState("")
 const [name, setName] = React.useState("0")
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("pdfcours",image)
    data.append("nameCours",name)
 
    dispatch(addCours(data, navigate))
  };

  return (
    <div>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            ADD Course
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  onChange={(e)=>setName(e.target.value)}
                />
              </Grid>
        
              <Grid item xs={12}>
             
                <TextField
                  required
                  fullWidth
                  id="file"
                  label="file"
                  name="file"
                  type= "file"
                  onChange={(e)=>setImage(e.target.files[0])}
                />
              </Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              ADD COURSE
            </Button>
      
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    <LinkR to="/cours">
    <Button style={{ "width":"200px","backgroundColor":"blue" , "color":"white"}}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
      Retour
    </Button>
  </LinkR>
    </div>
  );
}