import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRouteAdmin = ({children}) => {
  const currentUser=JSON.parse(localStorage.getItem('user'))
  return (
    <div>
        {localStorage.getItem('token') && currentUser.role==='admin'?children:<Navigate to="/login"/>}
    </div>
  )
}

export default PrivateRouteAdmin