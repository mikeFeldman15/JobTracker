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
// @ts-ignore
import UserHomePage from './userComponents/userHomePage.tsx';
// @ts-ignore
import QuestionsBox from './userComponents/QuestionsBox.tsx';
// @ts-ignore
import JobTracker from './userComponents/JobTracker.tsx';
// @ts-ignore
import Network from './userComponents/Network.tsx';
/**
 * ====================================
 *        Main Component
 * ====================================
 */
const App = () => {
  return (
    <div id="mainPage">
      <div id="navBar"></div>
      <div>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/signup" render={() => <Signup />} />
          <Route exact path="/about" render={() => <About />} />
          <Route exact path="/study" render={() => <QuestionsBox />} />
          <Route exact path="/jobTracker" render={() => <JobTracker />} />
          <Route exact path="/network" render={() => <Network />} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
