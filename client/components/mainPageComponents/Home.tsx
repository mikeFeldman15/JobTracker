/**
 * ====================================
 *        Main Imports
 * ====================================
 */
// @ts-ignore
import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
/**
 * ====================================
 *        File Imports
 * ====================================
 */

/**
 * ====================================
 *        Main Component
 * ====================================
 */

const Home = () => {
  return (
    <div id="home-container">
      <h2>Hello from the home component</h2>
      <div className="homepage-routes">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/signup">
          <button>Signup</button>
        </Link>
        <Link to="/about">
          <button>Learn More</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
