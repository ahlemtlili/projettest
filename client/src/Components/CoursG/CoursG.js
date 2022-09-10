import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentuser } from '../../Redux/actions/userActions';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { MdDeleteSweep } from 'react-icons/md';
import {GrUpdate} from "react-icons/gr";

import { deleteCours, getAllCours } from '../../Redux/actions/coursActions';
import { Typography } from '@mui/material';
import { Link as LinkR} from "react-router-dom";

export default function CoursG() {
  const cours= useSelector(state=>state.coursReducer.cours)
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAllCours());
    dispatch(getCurrentuser());
  }, []);
  return (
    <div>
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650}} aria-label="caption table">
               <TableHead>
          <TableRow>
            <TableCell style={{"fontSize":"25px" ,"color":"brown"}}>Name Of Course</TableCell>
            <TableCell align="left" style={{"fontSize":"25px","color":"brown" }}>Document</TableCell>
            <TableCell align="left" style={{"fontSize":"25px","color":"brown" }}>Enseignant</TableCell>
            <TableCell align="left" style={{"fontSize":"25px","color":"brown" }}>Delete</TableCell>
            <TableCell align="left" style={{"fontSize":"25px","color":"brown" }}>Update</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
        {cours.map((el) => (

            <TableRow key={el._id}>
              <TableCell component="th" scope="row" style={{"fontSize":"20px","color":"red" }}>
              {el.nameCours}
              </TableCell>
              <TableCell align="left" style={{"fontSize":"20px" }}>
              <Link to={`/pdfAdmin/${el._id}`}>
        <Typography gutterBottom variant="h5" component="div">
          {el.nameCours}
        </Typography>
        </Link>
              </TableCell>
              <TableCell align="left" style={{"fontSize":"20px" }}>{el.enseignant.firstName}  {el.enseignant.lastName}</TableCell>
              <TableCell align="left" style={{"fontSize":"20px" }}><div><Button style={{"fontSize":"20px"}} onClick ={()=> dispatch(deleteCours(el._id))} size="small"><MdDeleteSweep/>Delete</Button></div></TableCell>
              <TableCell align="left" style={{"fontSize":"20px" }}><div><LinkR to={`/editcoursG/${el._id}`}> 
                <Button style={{"fontSize":"20px"}} size="small"><GrUpdate/>Update</Button></LinkR></div></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <div style={{"display":"flex","justifyContent":'space-around',"marginTop":"20px" , "marginBottom":"50px"}}>  

 </div>
 <Link type="button" class="btn btn-primary"  style={{"fontSize":"25px" , "color":"white","backgroundColor":"blue",marginTop:"20px"}} to='/pageAdmin'>Retour</Link>
 </div> 
  );
}