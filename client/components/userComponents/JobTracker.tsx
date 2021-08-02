/**
 * ====================================
 *        Main Imports
 * ====================================
 */
// @ts-ignore
import React, { useEffect, useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
/**
 * ====================================
 *        File Imports
 * ====================================
 */



/**
 * ====================================
 *        Property Types
 * ====================================
 */

 interface Props {
  data: object;
}

/**
 * ====================================
 *        Main Component
 * ====================================
 */

const JobTracker = () => {
  return (
    <div>
      <h3>Hello from Job Tracker</h3>
    </div>
  )
}

export default JobTracker;
