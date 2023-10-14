import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/login/login';
import './router.scss';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router;