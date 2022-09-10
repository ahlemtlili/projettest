import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function CoursParentCard({el}) {
 
  return ( 
   <Card style={{width:"200px"}} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://img.freepik.com/vecteurs-libre/livres-stack-realistic_1284-4735.jpg?w=2000"
        alt={el.name}
      /> 
      <CardContent><Link to={`/pdfParent/${el._id}`}>
        <Typography gutterBottom variant="h5" component="div">
          {el.nameCours}
        </Typography>
        </Link>
        <Typography variant="body2" color="text.secondary">
         added by : {el.enseignant.firstName} {el.enseignant.lastName}
        </Typography>
      </CardContent>
      
    </Card>
    
  );
}