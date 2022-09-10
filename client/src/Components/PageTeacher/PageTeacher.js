import React from 'react';
import { Link } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';


const PageTeacher = () => {
  return (
    
  <div style={{"display":"flex","justifyContent":'space-around',"marginTop":"250px"}}>  
          <div><Link type="button" class="btn btn-primary"  style={{"fontSize":"25px" , "color":"white","backgroundColor":"blue"}} to='/profile'><FaSignInAlt />My Profile</Link></div>    

          <div ><Link type="button" class="btn btn-primary"  style={{"fontSize":"25px" , "color":"white","backgroundColor":"blue"}} to='/cours'><FaSignInAlt/>Cours</Link></div>
         <div><Link type="button" class="btn btn-primary"  style={{"fontSize":"25px" , "color":"white","backgroundColor":"blue"}} to='/note'><FaSignInAlt />Note</Link></div>    

    </div>    
  );
};

export default PageTeacher;
