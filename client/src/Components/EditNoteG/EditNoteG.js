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

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {editNoteAdmin, getOneNote } from "../../Redux/actions/noteActions";

const theme = createTheme();

export default function EditNoteG() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    //const data = new FormData(event.currentTarget);
  
    dispatch(editNoteAdmin(id, updatedNote, navigate));
  };
  
  const { id } = useParams();
  const oldNote = useSelector((state) => state.noteReducer.oneNote);
  const [updatedNote, setUpdatedNote] = React.useState(oldNote);
  React.useEffect(() => {
    dispatch(getOneNote(id));
  }, [dispatch,id]);
  React.useEffect(() => {
    setUpdatedNote(oldNote);
  }, [oldNote]);

  return (
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
            EDIT NOTE
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) =>
                    setUpdatedNote({
                      ...updatedNote,
                      nameMatiere: e.target.value,
                    })
                  }
                  value={updatedNote.nameMatiere}
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                  onChange={(e) =>
                    setUpdatedNote({
                      ...updatedNote,
                      note: e.target.value,
                    })
                  }
                  value={updatedNote.note}
                  required
                  fullWidth
                  id="note"
                  label="note"
                  name="note"
                  type="Number"
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save NOTE
            </Button>
          </Box>
        </Box>
        <Link to="/noteG">
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Cancel
          </Button>
        </Link>
      </Container>
    </ThemeProvider>
  );
}
