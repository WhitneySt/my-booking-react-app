import React, { createContext, useReducer } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/login/login';
import './router.scss';
import userLoggedReducer, { userLoggedInitial } from '../reducers/userLoggedReducer';
import PrivatedRoutes from './privateRouter';
import PublicRoutes from './publicRouter';
import Home from '../pages/home/home';
import Register from '../pages/register/register';

export const AppContext = createContext({});

const Router = () => {

  const [userLogged, userLoggedDispatch] = useReducer(userLoggedReducer, userLoggedInitial);

  const globalStates = {
    userLogged: { userLogged, userLoggedDispatch }
  }
  return (
    <AppContext.Provider value={globalStates}>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route element={<PrivatedRoutes isAuthenticate={userLogged.isAuthenticated} />}>
              <Route index element={<Home />} />
              <Route path='home' element={<Home />} />
            </Route>
            <Route element={<PublicRoutes isAuthenticate={userLogged.isAuthenticated} />}>
              <Route path='login' element={<Login />} />
              <Route path='register' element={<Register />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default Router;