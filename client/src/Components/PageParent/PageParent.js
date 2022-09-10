
import { FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function PageParent() {
 
  return (
    
    <div style={{"display":"flex","justifyContent":'space-around',"marginTop":"250px"}}> 
        <div ><Link type="button" class="btn btn-primary"  style={{"fontSize":"25px" , "color":"white","backgroundColor":"blue"}} to='/profileParent'><FaSignInAlt/>My Profile</Link></div>

          <div ><Link type="button" class="btn btn-primary"  style={{"fontSize":"25px" , "color":"white","backgroundColor":"blue"}} to='/coursParent'><FaSignInAlt/>Cours</Link></div>
         <div><Link type="button" class="btn btn-primary"  style={{"fontSize":"25px" , "color":"white","backgroundColor":"blue"}} to='/noteParent'><FaSignInAlt />Note</Link></div>    
         <div><Link type="button" class="btn btn-primary"  style={{"fontSize":"25px" , "color":"white","backgroundColor":"blue"}} to='/addChlidren'><FaSignInAlt />Add children</Link></div>    

    </div>
   
  )
}

export default PageParent