import React from 'react'
import {Link, Outlet} from 'react-router-dom'



function UserRequestItem() {
  return (
    <>
    <nav>
    <div>GuestLogin</div>
    
      <div>Login</div>
      <Link to="user-login">UserLogin</Link>
      <div>SignUp</div>
      <Link to="user-sign-up">UserSignUp</Link>
    </nav>
    <Outlet/>
 </>
    
  )
}

export default UserRequestItem