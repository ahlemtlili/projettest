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
import { Link as LinkR,  useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { editParent, editUser, getOneUser } from "../../Redux/actions/userActions";

const theme = createTheme();

export default function Parent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
  
    dispatch(editParent(id, updatedUser, navigate));
  };
  
  const { id } = useParams();
  const oldUser = useSelector((state) => state.userReducer.oneUser);
  const [updatedUser, setUpdatedUser] = React.useState(oldUser);
  React.useEffect(() => {
    dispatch(getOneUser(id));
  }, []);
  React.useEffect(() => {
    setUpdatedUser(oldUser);
  }, [oldUser]);

  return (
    <div style={{"fontSize":"30px"}}>
    <ThemeProvider theme={theme} >
      <Container component="main" maxWidth="xs" >
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
          <Typography component="h1" variant="h4">
            EDIT Profile
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
                    setUpdatedUser({
                      ...updatedUser,
                      firstName: e.target.value,
                    })
                  }
                  value={updatedUser.firstName}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="firstName"
                  autoFocus
                />
            </Grid>
            <Grid item xs={12}>
            <TextField
                  onChange={(e) =>
                    setUpdatedUser({
                      ...updatedUser,
                      lastName: e.target.value,
                    })
                  }
                  value={updatedUser.lastName}
                  autoComplete="given-name"
                  name="lastName"
                  required
                  fullWidth
                  id="lastName"
                  label="lastName"
                  autoFocus
                />
            </Grid>
            <Grid item xs={12}>
            <TextField
                  onChange={(e) =>
                    setUpdatedUser({
                      ...updatedUser,
                      email: e.target.value,
                    })
                  }
                  value={updatedUser.email}
                  autoComplete="given-name"
                  name="Email"
                  required
                  fullWidth
                  id="Email"
                  label="Email"
                  autoFocus
                />
            </Grid>




            <Grid item xs={12}>
                <TextField
                  onChange={(e) =>
                    setUpdatedUser({
                      ...updatedUser,
                      CIN: e.target.value,
                    })
                  }
                  value={updatedUser.CIN}
                  required
                  fullWidth
                  id="Identity card Number"
                  label="Identity card Number"
                  name="Identity card Number"
                  type="Number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) =>
                    setUpdatedUser({
                      ...updatedUser,
                      numTel: e.target.value,
                    })
                  }
                  value={updatedUser.numTel}
                  required
                  fullWidth
                  id="Phone Number"
                  label="Phone Number"
                  name="Phone Number"
                  type="Number"
                />
              </Grid>

            </Grid>

            <Button 
            style={{"fontSize":"23px"}}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save Information
            </Button>
          </Box>
        </Box>
        <Link to="/profileParent">
          <Button style={{"fontSize":"23px"}}
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
    <LinkR to="/profileParent">
    <Button style={{"fontSize":"20px", "width":"200px","backgroundColor":"blue" , "color":"white" , "marginTop":"158px"}}
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
