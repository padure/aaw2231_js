import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar.jsx';
//CSS
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
        <ToastContainer />
    </>
  )
}

export default MainLayout
