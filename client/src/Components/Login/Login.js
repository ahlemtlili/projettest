import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {signin} from '../../Redux/actions/userActions'

function Login() {
	const [email, setEmail] = useState("")
	const [password, setPasswod] = useState("") 
const dispatch=useDispatch() 
const navigate=useNavigate()
  return (
	<div className='body' >
		
    <div className="container">
    <input type="checkbox" id="flip"/>
    <div className="cover">
      <div className="front">
        <img src="https://2.bp.blogspot.com/-0avHcdnkiFc/WpcWHgQ1I5I/AAAAAAAADzo/i9ZyS0rcIso-RgDFiWwXTICk4NKDOK5SQCLcBGAs/s1600/L%25E2%2580%2599%25C3%2589cole.jpg" alt=""/>
        <div className="text">
          
        </div>
      </div>
      <div className="back">        
        <div className="text">
          
        </div>
      </div>
    </div>
    <div className="forms">
        <div className="form-content">
          <div className="login-form">
            <div className="title">Login</div>
          <form action="#">
            <div className="input-boxes">
              <div className="input-box">
                <i className="fas fa-envelope"></i>
                <input type="text" placeholder="Enter your email" required onChange={(e)=>setEmail(e.target.value)} value={email}/>
              </div>
              <div className="input-box">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Enter your password" required onChange={(e)=>setPasswod(e.target.value)} value={password}/>
              </div>
             
              <div className="button input-box">
                <input  value="Sumbit"  onClick={()=>dispatch(signin({email,password}, navigate))} />
              </div>
            </div>
        </form>
      </div>
      
    </div>
    </div>
  </div>
   
		
	</div>
  )
}

export default Login;