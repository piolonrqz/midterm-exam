import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import PersonalInformation from "./PersonalInformation";
import EducationalBackground from "./EducationalBackground";
import SkillsAndTrainings from "./SkillsAndTalents";
import SummaryInfo from "./SummaryInfo";

export default function TheRoutes() {
    const [formData, setFormData] = useState({
        personalInfo: {},
        educationalBackground: {},
        skillsAndTrainings: {}
    });

    const updateFormData = (section, data) => {
        setFormData(prevData => ({
            ...prevData,
            [section]: { ...prevData[section], ...data }
        }));
    };

    return (
        <Routes>
            <Route path="/" element={<Link to="perinfo">Start</Link>} />
            <Route 
                path="/perinfo" 
                element={
                    <PersonalInformation 
                        formData={formData.personalInfo} 
                        updateFormData={(data) => updateFormData('personalInfo', data)} 
                    />
                } 
            />
            <Route 
                path="/educbg" 
                element={
                    <EducationalBackground 
                        formData={formData.educationalBackground} 
                        updateFormData={(data) => updateFormData('educationalBackground', data)} 
                    />
                } 
            />
            <Route 
                path="/skilltr" 
                element={
                    <SkillsAndTrainings 
                        formData={formData.skillsAndTrainings} 
                        updateFormData={(data) => updateFormData('skillsAndTrainings', data)} 
                    />
                } 
            />
            <Route 
                path="/summaryinfo" 
                element={<SummaryInfo formData={formData} />} 
            />
            <Route path="*" element={<h1>Nothing Here..</h1>} />
        </Routes>
    );
}