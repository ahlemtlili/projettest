import * as React from "react";
import { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link as LinkR} from "react-router-dom";

import { addNote, getAllNotes } from "../../Redux/actions/noteActions";
import { getAllEleves, getCurrentuser } from "../../Redux/actions/userActions";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
const theme = createTheme();

export default function AddNote() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [children, setChildren] = React.useState("");
  const [nameMatiere, setNameMatiere] = React.useState("");
  const [note, setNote] = React.useState("");
  useEffect(() => {
    dispatch(getAllNotes());
    dispatch(getAllEleves());
    dispatch(getCurrentuser());
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addNote({nameMatiere:nameMatiere,note:note,children:children},navigate));
  };

  const eleves= useSelector((state) => state.userReducer.eleves);

  return (
    <div>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            ADD NOTE
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Name of Subject
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={nameMatiere}
                    label="nameMatiere"
                    onChange={(e)=>setNameMatiere(e.target.value)}
                  >
                    {["MATH","PHYSIQUE","ANGLAIS","LANGUE","ARABE","FRANCAIS","DESSIN","MUSIQUE"].map((el) => (
                      <MenuItem  value={el}>{el}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                  Name Of Pupil
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={children}
                    label="children"
                    onChange={(e)=>setChildren(e.target.value)}
                  >
                    {eleves.map((eleve) => (
                      <MenuItem value={eleve._id}>{eleve.firstName} {"   "}{eleve.lastName}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="note"
                  label="note"
                  name="note"
                  type="Number"
                  onChange={(e) =>setNote(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              ADD Note
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    <LinkR to="/note">
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
