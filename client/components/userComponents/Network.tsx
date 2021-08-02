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

const Network = () => {
  return (
    <div>
      <h3>Hello from Network</h3>
    </div>
  )
}

export default Network;