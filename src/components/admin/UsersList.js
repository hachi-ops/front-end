import React from "react";
import { Outlet } from "react-router-dom";

function UsersList() {
  return (
    <>
      <div>UsersList</div>
      <h2>User1</h2>
      <h2>User2</h2>
      <h2>User3</h2>
      <Outlet />
    </>
  )
}

export default UsersList
