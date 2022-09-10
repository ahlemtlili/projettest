import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import { Link, useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  editCoursAdmin,
  getOneCours
} from "../../Redux/actions/coursActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const theme = createTheme();

export default function EditCoursAdmin() {

const { id } = useParams();
  const oldCours = useSelector((state) => state.coursReducer.oneCours);
  const dispatch = useDispatch()
 const navigate = useNavigate()
 const [image, setImage] = React.useState("")
 const [name, setName] = React.useState("")
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("pdfcours",image)
    data.append("nameCours",name)
 
    dispatch(editCoursAdmin(id,data, navigate))
  };
  React.useEffect(() => {
    dispatch(getOneCours(id));
  }, []);
  React.useEffect(() => {
    setName(oldCours.nameCours);
  }, [oldCours.nameCours]);

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
          EDIT Course
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
                value={name}

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
            EDIT COURSE
          </Button>
    
        </Box>
      </Box>
    </Container>
  </ThemeProvider>
  <Link to="/coursG">
  <Button
  style={{"fontSize":"20px" , "color":"white","backgroundColor":"blue"}}
            variant="contained"
            sx={{ mt: 3, mb: 2 }}>
    Retour
  </Button>
</Link>
  </div>
  );
}
