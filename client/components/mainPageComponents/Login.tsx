/**
 * ====================================
 *        Main Imports
 * ====================================
 */
import React, { useEffect, useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
/**
 * ====================================
 *        File Imports
 * ====================================
 */
// @ts-ignore
import UserHomePage from '../userComponents/userHomePage.tsx';

/**
 * ====================================
 *        Main Component
 * ====================================
 */
const Login = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [userId, setUserId] = useState(null);

  const userHomePage = <UserHomePage firstName={firstName} userId={userId} />;
  return isLoggedIn ? (
    <div>{userHomePage}</div>
  ) : (
    <div id="login-container">
      <h3>Login to | Insert Name of App |</h3>
      <form id="login-form">
        <input id="login-firstName" placeholder="First Name" type="text" />
        <br />
        <input id="login-lastName" placeholder="Last Name" type="text" />
        <br />
        <input id="login-password" placeholder="Password" type="password" />
        <br />
        <input id="login-email" placeholder="Email" type="text" />
        <br />
        <button id="login-submit" onClick={userLogin}>
          Log in
        </button>
      </form>
    </div>
  );

  /**
   * ====================================
   *        Helper Functions
   * ====================================
   */

  /** Logging the user in and grabbing the userId from the db **/
  function userLogin(e) {
    e.preventDefault();

    const firstName = document.getElementById('login-firstName') as HTMLInputElement;
    const lastName = document.getElementById('login-lastName') as HTMLInputElement;
    const password = document.getElementById('login-password') as HTMLInputElement;
    const email = document.getElementById('login-email') as HTMLInputElement;

    if (firstName.value === '' || lastName.value === '' || password.value === '' || email.value === '') {
      console.log('Please enter all required fields');
    }

    console.log('username: ' + firstName.value);
    console.log('username: ' + lastName.value);
    console.log('password: ' + password.value);
    console.log('email: ' + email.value);
    setFirstName(firstName.value);

    //Send post request with user information!
    //after successful post request return the userId
    setUserId('temp');
    setLoggedIn(true);
  }
};

export default Login;
