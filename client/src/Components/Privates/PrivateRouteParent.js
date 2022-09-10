import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRouteParent = ({children}) => {
  const currentUser=JSON.parse(localStorage.getItem('user'))

  return (
    <div>
        {localStorage.getItem('token') && currentUser.role==='parent'?children:<Navigate to="/login"/>}
    </div>
  )
}

export default PrivateRouteParent