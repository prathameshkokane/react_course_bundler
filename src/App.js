import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/User/Home/Home';
import Header from './components/User/Layout/Header';
import Courses from './components/User/Courses/Courses';
import Footer from './components/User/Layout/Footer';
import Login from './components/User/Auth/Login';
import Register from './components/User/Auth/Register';
import ForgetPassword from './components/User/Auth/ForgetPassword';
import ResetPassword from './components/User/Auth/ResetPassword';
import Contact from './components/User/Contact/Contact';
import Request from './components/User/Request/Request';
import About from './components/User/About/About';
import Subscribe from './components/User/Payments/Subscribe';
import NotFound from './components/User/Layout/NotFound';
import PaymentSuccess from './components/User/Payments/PaymentSuccess';
import PaymentFail from './components/User/Payments/PaymentFail';
import Coursepage from './components/User/CoursePage/Coursepage';
import Profile from './components/User/Profile/Profile';
import UpdateProfile from './components/User/Profile/UpdateProfile';
import ChangePassword from './components/User/Profile/ChangePassword';
import DashBoard from './components/Admin/DashBoard/DashBoard';
import CreateCourse from './components/Admin/CreateCourse/CreateCourse';
import Users from './components/Admin/Users/Users';
import AdminCourses from './components/Admin/AdminCourses/AdminCourses';

function App() {
  window.addEventListener('contextmenu', e => e.preventDefault());

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<Coursepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/request" element={<Request />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/updateprofile" element={<UpdateProfile />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/paymentfail" element={<PaymentFail />} />
        <Route path="*" element={<NotFound />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<DashBoard />} />
        <Route path="/admin/createcourse" element={<CreateCourse />} />
        <Route path="/admin/courses" element={<AdminCourses />} />
        <Route path="/admin/users" element={<Users />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
