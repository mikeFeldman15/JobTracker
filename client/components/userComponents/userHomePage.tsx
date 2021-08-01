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
  questions: object[];
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

const UserHomePage = ({firstName, userId, questions}) => {
  
  const [questionComponent, setquestionComponent] = useState(null);

  /** On rendering the page with the userId from the previous component grab all the questions associated with this user **/
  
  if (questionComponent === null) {
    console.log('questions')
    console.log(questions)
    setquestionComponent(generateQuestionBoxes(questions))
  }
  


  /** To get all questions associated */
  return (
    <div className="userHomePage-container">
      <div className="main-header">
        <h2>Hello {firstName} from userHomePage</h2>
      </div>
      <div className="questions-container">
        <div className="question-box-container">
          <h4 className="question=header">Question Header</h4>
          {questionComponent}
        </div>
      </div>
    </div>
  )

  /**
 * ====================================
 *        Helper Functions
 * ====================================
 */

  function generateQuestionBoxes(questions: object[]) {
    const questionsArray: any[] = [];
    for (let i = 0; i < questions.length; i++) {
      questionsArray.push(<QuestionsBox question={questions[i]}/>)
    }
    return questionsArray;
  }


}

export default UserHomePage;