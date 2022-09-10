import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { deleteCoursTeacher } from '../../Redux/actions/coursActions';
import { useDispatch, useSelector } from 'react-redux';

export default function CoursCard({el}) {
  const currentUser = useSelector(state=>state.userReducer.currentUser)
    const dispatch = useDispatch()
  return (
   <Card style={{width:"200px"}} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://img.freepik.com/vecteurs-libre/livres-stack-realistic_1284-4735.jpg?w=2000"
        alt={el.name}
      /> 
      <CardContent><Link to={`/pdf/${el._id}`}>
        <Typography gutterBottom variant="h5" component="div">
          {el.nameCours}
        </Typography>
        </Link>
        <Typography variant="body2" color="text.secondary">
         added by : {el.enseignant.firstName} {el.enseignant.lastName}
        </Typography>
      </CardContent>
      {el.enseignant._id===currentUser._id?
      <CardActions>
       <Button onClick ={()=> dispatch(deleteCoursTeacher(el._id))} size="small">Delete</Button>
     <Link to={`/editcours/${el._id}`}><Button size="small">Edit</Button></Link>
      </CardActions>:null  }
    </Card>
    
  );
}