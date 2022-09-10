import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllCours } from '../../Redux/actions/coursActions'
import { getCurrentuser } from '../../Redux/actions/userActions'
import CoursParentCard from '../CoursParentCard/CoursParentCard'
import Button from 'react-bootstrap/Button';

const CoursParent = () => {
    const cours = useSelector(state=>state.coursReducer.cours)
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllCours());
      dispatch(getCurrentuser());
    }, []);
    return (
      <div>
  
    <div style={{display:"flex",gap:"1rem",flexWrap:'wrap', paddingTop:"200px", width:"1500px", marginLeft:"auto", marginRight:"auto"}}>
    {cours.map(el=><CoursParentCard el={el} key={el._id}/>)}
</div>
<Link to="/pageParent">
<Button style={{ "width":"200px","backgroundColor":"blue" , "color":"white",marginTop:"100px"}}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >      Retour
    </Button>
  </Link>
</div>
)
  
}

export default CoursParent
