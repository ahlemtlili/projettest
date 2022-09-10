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
import { deleteNote, getAllNotes } from '../../Redux/actions/noteActions';
import { MdDeleteSweep } from 'react-icons/md';
import { FaSignInAlt } from 'react-icons/fa';
import { GrUpdate } from 'react-icons/gr';
import { Link as LinkR} from "react-router-dom";
export default function Note() {
    const notes= useSelector(state=>state.noteReducer.notes)
    const dispatch = useDispatch();
    React.useEffect(() => {
      dispatch(getAllNotes());
      dispatch(getCurrentuser());
    }, []);
    const currentUser = useSelector(state=>state.userReducer.currentUser)
  return (
    <div>
    <TableContainer component={Paper} style={{marginTop:"4rem"}}>
      <Table sx={{ minWidth: 650}} aria-label="caption table">
               <TableHead>
          <TableRow>
            <TableCell style={{"fontSize":"25px" ,"color":"brown"}}>Name Of Subject</TableCell>
            <TableCell align="left" style={{"fontSize":"25px","color":"brown" }}>Note</TableCell>
            <TableCell align="left" style={{"fontSize":"25px","color":"brown" }}>Enseignant</TableCell>
            <TableCell align="left" style={{"fontSize":"25px","color":"brown" }}>Elève</TableCell>
            <TableCell align="left" style={{"fontSize":"25px","color":"brown" }}>classe</TableCell>
            <TableCell align="left" style={{"fontSize":"25px","color":"brown" }}>Delete</TableCell>
            <TableCell align="left" style={{"fontSize":"25px","color":"brown" }}>Update</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
        {notes.map((el) => (

            <TableRow key={el._id}>
              <TableCell component="th" scope="row" style={{"fontSize":"20px","color":"blue" }}>
              {el.nameMatiere}
              </TableCell>
              <TableCell align="left" style={{"fontSize":"20px" }}>{el.note}</TableCell>
              <TableCell align="left" style={{"fontSize":"20px" }}>{el.enseignant.firstName}  {el.enseignant.lastName}</TableCell>
              <TableCell align="left" style={{"fontSize":"20px" }}>{el.children.firstName}  {el.children.lastName}</TableCell>
              <TableCell align="left" style={{"fontSize":"20px" }}>{el.children.classe}</TableCell>
              <TableCell align="left" style={{"fontSize":"20px" }}>
                <div>{el.enseignant._id===currentUser._id?
                  <Button style={{"fontSize":"20px"}} onClick ={()=> dispatch(deleteNote(el._id))} size="small"><MdDeleteSweep/>Delete</Button>:null  }
                  </div></TableCell>
              <TableCell align="left" style={{"fontSize":"20px" }}><div>
              {el.enseignant._id===currentUser._id?<LinkR to={`/editnote/${el._id}`}> 
                <Button style={{"fontSize":"20px"}} size="small"><GrUpdate/>Update</Button></LinkR>:null  }
                </div></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <div style={{"display":"flex","justifyContent":'space-around',"marginTop":"20px" , "marginBottom":"50px"}}>  
 <div ><Link type="button" class="btn btn-primary"  style={{"fontSize":"25px" , "color":"white","backgroundColor":"blue"}} to='/AddNote'><FaSignInAlt/>Add Note</Link></div></div>
 <Link type="button" class="btn btn-primary"  style={{"fontSize":"25px" , "color":"white","backgroundColor":"blue"}} to='/pageTeacher'>Retour</Link>
 </div> 
  );
}