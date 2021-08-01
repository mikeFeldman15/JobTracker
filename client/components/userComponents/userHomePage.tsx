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
import QuestionsBox from './QuestionsBox.tsx'


/**
 * ====================================
 *        Property Types
 * ====================================
 */

interface Props {
  firstName: string;
  userId: string;
}

//ugh wtf...
interface generateQuestionBoxesResponse {
  questionsArray: any[];
}


/**
 * ====================================
 *        Main Component
 * ====================================
 */

const UserHomePage = ({firstName, userId}) => {
  const [studyToggle, setStudyToggle] = useState(false);
  const [jobTrackerToggle, setJobTrackerToggle] = useState(false);
  const [networkingToggle, setNetworkingToggle] = useState(false);
  const [questionComponent, setquestionComponent] = useState([]);

  /** On rendering the page with the userId from the previous component grab all the questions associated with this user **/
  
  console.log('question component');
  console.log(questionComponent)
  /** To get all questions associated */
  return (
    // <div className="userHomePage-container">
     
      
      !studyToggle && !jobTrackerToggle && !networkingToggle ? (
        <div>
          <div className="main-header">
            <h2>Hello {firstName} from userHomePage</h2>
          </div>
          <div className="button-container">
            <button className="question-button" onClick={studyMode}>Study</button>
            <button className="jobTracker-button" onClick={jobTracker}>Job Tracker</button>
            <button className="jobTracker-button" onClick={networking}>Your Network</button>            
          </div>
        </div>
      ) : studyToggle ? (
        questionComponent
      ) : jobTrackerToggle ? (
        <h3>Job tracker toggle</h3>
      ) : networkingToggle ? (
        <h3>Networking Toggle</h3>
      ) : (
        <div className="button-container">
          <button className="question-button" onClick={studyMode}>Study</button>
          <button className="jobTracker-button" onClick={jobTracker}>Job Tracker</button>
          <button className="jobTracker-button" onClick={networking}>Your Network</button>            
        </div>
      )     
    //  
  )

  /**
 * ====================================
 *        Helper Functions
 * ====================================
 */

  function studyMode() {
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
      questionsArray.push(<QuestionsBox data={tempSampleQuestionData[i]}/>)
    }
    // data={tempSampleQuestionData[i]}
    console.log('setting question prop')
    setquestionComponent(questionsArray)
    setStudyToggle(true)
    return;
  }

  function jobTracker() {
    //get request to get all of this person's job info
    const tempContacts = [];
  }

  function networking() {
    //get request to get all of this persons people info
  }


}

export default UserHomePage;