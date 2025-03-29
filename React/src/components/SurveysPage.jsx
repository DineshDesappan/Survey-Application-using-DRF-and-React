import React, { use } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import { useState, useEffect } from 'react'

function SurveysPage() {
    let [surveys, setSurveys] = useState([]);

    useEffect(() => {
    fetch('http://127.0.0.1:8000/survey/surveys/')
      .then(response => response.json())
    //   .then(data => console.log(data))
      .then(data => setSurveys(data))     
      .catch(error => console.log(error));
  }, []);
  return (
    <div>
       <h1>Available Surveys</h1>
         
            {surveys.map(survey => (
              
              <>
              <Link to={`/survey/${survey.id}`}>{survey.id}. {survey.name}</Link>
              
              <p>{survey.description}</p>
              </> 
            
            ))}
            
    </div>
  )
}

export default SurveysPage