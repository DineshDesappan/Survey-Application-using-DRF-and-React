import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SurveyDetailPage from './components/SurveyDetailPage';
import SubmitPage from './components/SubmitPage';
import HomePage from './components/HomePage';
import SurveysPage from './components/SurveysPage';
import AboutPage from './components/About';


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/surveys" element={<SurveysPage />} />
                <Route path="/survey/:id" element={<SurveyDetailPage />} />
                <Route path="/survey/:id/submit" element={<SubmitPage />} />
                <Route path="/about" element={<AboutPage/>} />
            </Routes>
        </Router>
    );
}

export default App;