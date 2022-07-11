import "./App.css";
import AdminLogin from "./components/admin/AdminLogin";
import AdminProductsList from "./components/admin/AdminProductsList";
import AdminProfile from "./components/admin/AdminProfile";
import AdminViewItems from "./components/admin/AdminViewItems";
import Home from "./components/Home";
import ItemsList from "./components/admin/ItemsList";
import Navbar from "./components/Navbar";
import NoMatch from "./NoMatch";
import React from "react";
import RequestSummary from "./components/user/RequestSummary";
import UserDetails from "./components/admin/UserDetails";
import UserLogin from "./components/user/UserLogin";
import UserProfile from "./components/user/UserProfile";
import UserRequestItem from "./components/user/UserRequestItem";
import UserSignUp from "./components/user/UserSignUp";
import UsersList from "./components/admin/UsersList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./components/auth";

// import Footer from './components/Footer';
// import UserViewItems from './components/UserViewItems';

function App() {
  return (
    
   
   <Router>
     <AuthProvider>
      <div className="App">

        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* <Route path="/user-view-items" element={<UserViewItems/>} /> */}
          <Route path="/user-request-item" element={<UserRequestItem />}>
            {/* <Route index element={<UserLogin/>}/>   */}
            <Route path="user-login" element={<UserLogin />} />
            <Route path="user-sign-up" element={<UserSignUp />} />
          </Route>
          <Route path="/user-request-item" element={<UserRequestItem />} />
          <Route path="user-login" element={<UserLogin />} />
          <Route path="user-sign-up" element={<UserSignUp />} />
          <Route path="/request-summary" element={<RequestSummary />} />
          <Route path="/user-request-item" element={<UserRequestItem />} />
          <Route path="/admin-view-items" element={<AdminViewItems />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-products-list" element={<AdminProductsList />} />
          <Route path="/users-list" element={<UsersList />}>
            <Route path=":userId" element={<UserDetails />} />
            <Route path="admin-profile" element={<AdminProfile />} />
          </Route>
          <Route path="/items-list" element={<ItemsList />} />
          <Route path="*" element={<NoMatch />} />
          <Route path="/user-profile" element={<UserProfile/>} />
        </Routes>
        {/* <Footer /> */}
       
      </div>
      </AuthProvider>
    </Router>
   
 
  )
}

export default App
