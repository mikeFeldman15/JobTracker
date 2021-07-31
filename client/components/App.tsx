/**
 * ====================================
 *        Main Imports
 * ====================================
 */
// @ts-ignore
import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

/**
 * ====================================
 *        File Imports
 * ====================================
 */

// @ts-ignore
 import Home from './mainPageComponents/Home.tsx';
// @ts-ignore
import Login from './mainPageComponents/Login.tsx';
// @ts-ignore
import Signup from './mainPageComponents/Signup.tsx';
// @ts-ignore
import About from './mainPageComponents/About.tsx';

/**
 * ====================================
 *        Main Component
 * ====================================
 */
const App = () => {
  return (
    <div id='mainPage'>
      <div id='navBar'>
      </div>
      <div>
        <Switch>
          <Route exact path='/' render={() => <Home />} /> 
          <Route exact path='/login' render={() => <Login />} />
          <Route exact path='/signup' render={() => <Signup />} />
          <Route exact path='/about' render={() => <About />} /> 
        </Switch>
      </div>
      <h2>Page is Rendering</h2>
    </div>
  )
}

export default App;