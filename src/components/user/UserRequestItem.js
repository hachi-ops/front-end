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
    {/* <div>UserRequestItem</div>

    <form>
      <lable htmlFor="item-name">item name</lable>
      <input type="text" id="item-name" />
      <button>submit</button>
    </form>
    <br/>
    <div>GuestLogin</div>
    <form>
          <label htmlFor='first-name'>First Name</label>
          <input type="text" id="first-name"/>
          <label htmlFor='last-name'>Last Name</label>
          <input type="text"/>
          <label htmlFor='address' >Address</label>
          <input type="text" />
          <label htmlFor='email'>Email</label>
          <input type="text" />
          <label htmlFor='telephone'>Telephone</label>
          <input type="email" />
          <button>UserSignUp</button>
        </form>
        <br/>
        <div>UserLogin</div>
        <form>
          <label>UserNameOrEmail</label>
          <input type="text"></input>
          <label>Password</label>
          <input type="password" />
          <button>Login</button>
        </form>
        <br />
        <div>UserSignUp</div>
        <form>
          <label htmlFor='first-name'>First Name</label>
          <input type="text" id="first-name"/>
          <label htmlFor='last-name'>Last Name</label>
          <input type="text"/>
          <label htmlFor='address' >Address</label>
          <input type="text" />
          <label htmlFor='email'>Email</label>
          <input type="text" />
          <label htmlFor='telephone'>Telephone</label>
          <input type="email" />
          <button>UserSignUp</button>
        </form>
        <br /> */}
    </>
    
  )
}

export default UserRequestItem