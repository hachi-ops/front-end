import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
// import Footer from './components/Footer';
// import UserViewItems from './components/UserViewItems';
import UserRequestItem from './components/user/UserRequestItem';
import UserSignUp from './components/user/UserSignUp';
import UserLogin from './components/user/UserLogin';
import RequestSummary from './components/user/RequestSummary';
// import AdminViewItems from './AdminViewItems';
// import AdminLogin from './AdminLogin';
import NoMatch from './NoMatch';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <Routes>       
      <Route path="/" exact element={<Home />} />
      {/* <Route path="/user-view-items" element={<UserViewItems/>} /> */}
      <Route path="/user-request-item" element={<UserRequestItem />} />
      <Route path="/user-sign-up" element={<UserSignUp/>}/>
      <Route path="/user-login" element={<UserLogin />} />     
      <Route path="/request-summary" element={<RequestSummary/>} />
      <Route path="*" element={<NoMatch/>} />
      {/* <Route path="/admin-view-items" element={<AdminViewItems />} />
      <Route path='/admin-login' element={<AdminLogin />} /> */}
      </Routes>       
      {/* <Footer /> */}
    </div>
    </Router>
  );
}

export default App;
