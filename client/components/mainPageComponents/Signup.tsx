/**
 * ====================================
 *        Main Imports
 * ====================================
 */
import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
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
const Signup = () => {
  const [isSignedUp, setSignedUp] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [userId, setUserId] = useState(null);

  const userHomePage = <UserHomePage firstName={firstName} userId={userId} />;
  return isSignedUp ? (
    <div className="send-to-userHomePage">{userHomePage}</div>
  ) : (
    <div id="home-container">
      <div className="signup-container">
        <form className="signup-form">
          <input id="signup-firstName" placeholder="First Name" type="text" />
          <br />
          <input id="signup-lastName" placeholder="Last Name" type="text" />
          <br />
          <input id="signup-password" placeholder="Password" type="password" />
          <br />
          <input id="signup-email" placeholder="Email" type="text" />
          <br />
          <button className="signup-button" type="submit" onClick={userSignup}>
            Signup
          </button>
        </form>
      </div>
    </div>
  );

  /**
   * ====================================
   *        Helper Functions
   * ====================================
   */

  function userSignup(e) {
    e.preventDefault();

    const firstName = document.getElementById('signup-firstName') as HTMLInputElement;
    const lastName = document.getElementById('signup-lastName') as HTMLInputElement;
    const password = document.getElementById('signup-password') as HTMLInputElement;
    const email = document.getElementById('signup-email') as HTMLInputElement;

    if (firstName.value === '' || lastName.value === '' || password.value === '' || email.value === '') {
      console.log('Please enter all required fields');
    }

    console.log('firstName: ' + firstName.value);
    console.log('lastName: ' + lastName.value);
    console.log('password: ' + password.value);
    console.log('email: ' + email.value);

    setSignedUp(true);
    //Send post request with user information!
    //after successful request
    setFirstName(firstName.value);
    setUserId('temp');
  }
};

export default Signup;
