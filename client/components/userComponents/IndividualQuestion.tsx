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
  question: object;
}

/**
 * ====================================
 *        Main Component
 * ====================================
 */

const IndividualQuestion = ({ question }) => {
  const [goToAnswer, setGoToAnswer] = useState(false);
  return !goToAnswer ? (
    <div>
      <button onClick={changeQuestionState}>{question.question}</button>
    </div>
  ) : (
    <div>
      <button onClick={changeQuestionState}>{question.answer}</button>
    </div>
  );

  /**
   * ====================================
   *        Helper Functions
   * ====================================
   */

  function changeQuestionState() {
    if (goToAnswer) setGoToAnswer(false);
    else setGoToAnswer(true);
    return;
  }
};

export default IndividualQuestion;
