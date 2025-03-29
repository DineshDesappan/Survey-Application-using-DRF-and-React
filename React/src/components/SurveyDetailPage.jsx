
import React, { useState, useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';

function SurveyDetailPage() {
    const { id } = useParams();
    const [survey, setSurvey] = useState(null); 
    const [selectedChoices, setSelectedChoices] = useState({}); // To store selected choices

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/survey/surveys/${id}/`) 
            .then(response => response.json())
            .then(data => setSurvey(data)) 
            .catch(error => console.error('Error fetching survey:', error));
    }, [id]);

    const handleChoiceChange = (questionId, choiceId) => {
        setSelectedChoices(prevState => ({
            ...prevState,
            [questionId]: choiceId,
        }));
    };

    if (!survey) {
        return <p>Loading...</p>; 
    }

    return (
        <>
            <h1>Survey Detail Page</h1>
            <h2>{survey.name}</h2>
            <p>{survey.description}</p>
            <h3>Questions:</h3>
            {survey.questions && survey.questions.map((question, index) => (
                <div key={index}>
                    <h4>{question.id}.  {question.question_text}</h4>
                    <ul>
                        {question.choices && question.choices.map((choice, choiceIndex) => (
                            <li key={choiceIndex}>
                                <label>
                                    <input
                                        type="radio"
                                        name={`question-${question.id}`} // Group radio buttons by question ID
                                        value={choice.id}
                                        checked={selectedChoices[question.id] === choice.id}
                                        onChange={() => handleChoiceChange(question.id, choice.id)}
                                    />
                                    {choice.choice_text}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
             <button ><Link to={`/survey/${id}/submit`}>Go To Submit Page</Link></button>
        </>
    );
}

export default SurveyDetailPage;


