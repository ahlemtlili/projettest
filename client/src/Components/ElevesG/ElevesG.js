import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import {deletePupil, getAllEleves, getCurrentuser } from '../../Redux/actions/userActions';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { MdDeleteSweep } from 'react-icons/md';

export default function ElevesG() {
    const eleves= useSelector(state=>state.userReducer.eleves)

    const dispatch = useDispatch();
    React.useEffect(() => {
      dispatch(getAllEleves());
      dispatch(getCurrentuser());
    }, []);
  return (
    <div>
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650}} aria-label="caption table">
               <TableHead>
          <TableRow style={{}}>
            <TableCell style={{"fontSize":"25px" ,"color":"brown"}}>FirstName</TableCell>
            <TableCell align="left" style={{"fontSize":"25px","color":"brown" }}>LastName</TableCell>
            <TableCell align="left" style={{"fontSize":"25px","color":"brown" }}>Classe</TableCell>
            <TableCell align="left" style={{"fontSize":"25px","color":"brown" }}> Email</TableCell>

            <TableCell align="left" style={{"fontSize":"25px","color":"brown" }}>Delete</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
        {eleves.map((el) => (

            <TableRow key={el._id}>
              <TableCell component="th" scope="row" style={{"fontSize":"20px","color":"blue" }}>
              {el.firstName}
              </TableCell>
              <TableCell align="left" style={{"fontSize":"20px" }}>{el.lastName}</TableCell>
              <TableCell align="left" style={{"fontSize":"20px" }}>{el.classe}</TableCell>
              <TableCell align="left" style={{"fontSize":"20px" }}>{el.email}</TableCell>

              <TableCell align="left" style={{"fontSize":"20px" }}><div><Button style={{"fontSize":"20px"}} onClick ={()=> {dispatch(deletePupil(el._id))}} size="small"><MdDeleteSweep/>Delete</Button></div></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <div style={{"display":"flex","justifyContent":'space-around',"marginTop":"20px" , "marginBottom":"50px"}}>  

 </div>
 <Link type="button" class="btn btn-primary"  style={{"fontSize":"25px" , "color":"white","backgroundColor":"blue"}} to='/pageAdmin'>Retour</Link>
 </div> 
  );
}