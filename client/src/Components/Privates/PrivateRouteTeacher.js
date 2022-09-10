import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRouteTeacher = ({children}) => {
  const currentUser=JSON.parse(localStorage.getItem('user'))

  return (
    <div>
        {localStorage.getItem('token') && currentUser.role==='enseignant'?children:<Navigate to="/login"/>}
    </div>
  )
}

export default PrivateRouteTeacher