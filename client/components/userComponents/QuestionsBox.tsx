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

const QuestionsBox = ({data}) => {
  console.log('from question box');
  // console.log(prop)
  return (
    <div className="questionBox-container">
      <h3>Hello from question box</h3>
      <h4>{data.question}</h4>
    </div>
  )

}

export default QuestionsBox;
