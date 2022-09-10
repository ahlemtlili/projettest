import React, { useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllCours } from '../../Redux/actions/coursActions'
import { getCurrentuser } from '../../Redux/actions/userActions'
import CoursCard from '../CoursCard/CoursCard'
import Button from 'react-bootstrap/Button';
const Cours = () => {
    const cours = useSelector(state=>state.coursReducer.cours)
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllCours());
      dispatch(getCurrentuser());
    }, []);
    return (
      <div>
    <div style={{"display":"flex","justifyContent":'space-around',"marginTop":"20px" , "marginBottom":"50px"}}>  
          <div ><Link type="button" class="btn btn-primary"  style={{"marginTop":"100px","fontSize":"25px" , "color":"white","backgroundColor":"blue"}} to='/AddCours'><FaSignInAlt/>Add Course</Link></div>
         
    </div> 
    <div style={{display:"flex",gap:"1rem",flexWrap:'wrap', paddingTop:"200px", width:"1500px", marginLeft:"auto", marginRight:"auto"}}>
    {cours.map(el=><CoursCard el={el} key={el._id}/>)}
</div>
<Link to="/pageTeacher">
<Button style={{ "width":"200px","backgroundColor":"blue" , "color":"white",marginTop:"100px"}}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
      Retour
    </Button>
  </Link>
</div>
)
  
}

export default Cours
