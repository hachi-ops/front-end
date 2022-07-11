import React from "react";

function UserLogin() {
  return (
    <>
      <div>UserLogin</div>
      <form>
        <label>UserNameOrEmail</label>
        <input type="text"></input>
        <label>Password</label>
        <input type="password" />
        <button>Login</button>
      </form>
    </>
  )
}

export default UserLogin
