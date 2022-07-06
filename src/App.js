import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
// import Footer from './components/Footer';
// import UserViewItems from './components/UserViewItems';
import UserRequestItem from './components/user/UserRequestItem';
import UserSignUp from './components/user/UserSignUp';
import UserLogin from './components/user/UserLogin';
import RequestSummary from './components/user/RequestSummary';
import AdminViewItems from './components/admin/AdminViewItems';
import AdminLogin from './components/admin/AdminLogin';
import NoMatch from './NoMatch';
import UsersList from './components/admin/UsersList';
import UserDetails from './components/admin/UserDetails';
import AdminProductsList from './components/admin/AdminProductsList';
import AdminProfile from './components/admin/AdminProfile';


function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <Routes>       
      <Route path="/" exact element={<Home />} />
      {/* <Route path="/user-view-items" element={<UserViewItems/>} /> */}
      <Route path="/user-request-item" element={<UserRequestItem />}>
        {/* <Route index element={<UserLogin/>}/>   */}
        <Route path="user-login" element={<UserLogin/>} />
        <Route path="user-sign-up" element={<UserSignUp/>} />
        </Route>
    
        <Route path="/user-request-item" element={<UserRequestItem />}/>
          <Route path="user-login" element={<UserLogin/>} />
        <Route path="user-sign-up" element={<UserSignUp/>} />      
       <Route path="/request-summary" element={<RequestSummary/>} />    
      <Route path="/user-request-item" element={<UserRequestItem/>} />     
      <Route path="/admin-view-items" element={<AdminViewItems />} />
      <Route path='/admin-login' element={<AdminLogin />} />
      <Route path="/admin-products-list" element={<AdminProductsList/>}/>
      <Route path="/users-list" element={<UsersList/>}>
      <Route path=":userId" element={<UserDetails/>}/>
      <Route path="admin-profile" element={<AdminProfile/>}/>
      </Route>
 
      <Route path="*" element={<NoMatch/>} />
      </Routes>       
      {/* <Footer /> */}
    </div>
    </Router>
  );
}

export default App;
