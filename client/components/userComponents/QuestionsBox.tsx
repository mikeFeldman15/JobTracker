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
// @ts-ignore
import IndividualQuestion from './IndividualQuestion.tsx'


/**
 * ====================================
 *        Property Types
 * ====================================
 */


/**
 * ====================================
 *        Main Component
 * ====================================
 */

const QuestionsBox = () => {
  const [gatherQuestions, setGatherQuestions] = useState(false);
  const [usersQuestions, setUsersQuestions] = useState([]);
  
  if(!gatherQuestions) {
    getUserQuestions()
  }

  return (
    <div className="questionBox-container">
      <h3>Hello from question box</h3>
      {usersQuestions}
    </div>
  )

/**
 * ====================================
 *        Helper Functions
 * ====================================
 */

function getUserQuestions() {
  //get request for user's questions
  //need userId here!
  const questionsArray: any[] = [];
  // initialize a get request w/ userId to get all this users questions
  const tempSampleQuestionData = [
  {
    question: 'What is node?',
    answer: 'fuck if I care'
  },
  {
    question: 'Why use React?',
    answer: 'Only framework I know'
  }
]
  for (let i = 0; i < tempSampleQuestionData.length; i++) {
    questionsArray.push(< IndividualQuestion question={tempSampleQuestionData[i]}/>)
  }
  // data={tempSampleQuestionData[i]}
  console.log('setting question prop')
  setUsersQuestions(questionsArray);
  setGatherQuestions(true);
  return;
}


}

export default QuestionsBox;
