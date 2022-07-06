import React from 'react'


function UserSignUpForm() {
    return (
        <>
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
        </>
    )
}
function UserSignUp() {
  return (
    <div>
        {<UserSignUpForm />}
    </div>
  )
}

export default UserSignUp