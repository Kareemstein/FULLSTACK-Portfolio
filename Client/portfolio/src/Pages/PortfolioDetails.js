// PortfolioDetails.js

import React from 'react';
import { useParams, Link } from 'react-router-dom';

function PortfolioDetails() {
  const { id } = useParams();

  const projects = {
    '1': {
      title: "Saher's Portfolio",
      description: 'Full Stack Developer. Focused on backend systems, Node.js and databases.',
      skills: ['Node.js', 'Express', 'MongoDB', 'Docker'],
      cvFile: 'CV_Saher.pdf',
    },
    '2': {
      title: "Kareem's Portfolio",
      description: 'Frontend Engineer with passion for React, UX/UI, and animation.',
      skills: ['React', 'Bootstrap', 'JavaScript', 'CSS'],
      cvFile: 'CV_Kareem.pdf',
    }
  };

  const project = projects[id];

  if (!project) {
    return (
      <div className="container mt-5">
        <h1>Project Not Found</h1>
        <p>We couldn't find the portfolio you're looking for.</p>
        <Link to="/" className="btn btn-secondary mt-3">← Back to Portfolio</Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h1>{project.title}</h1>
      <p className="lead">{project.description}</p>

      <h5 className="mt-4">Skills:</h5>
      <ul className="list-group mb-3">
        {project.skills.map((skill, index) => (
          <li key={index} className="list-group-item">{skill}</li>
        ))}
      </ul>

      <a href={`/${project.cvFile}`} download className="btn btn-primary me-2">
        Download CV
      </a>
      <Link to="/" className="btn btn-outline-secondary">
        ← Back to Portfolio
      </Link>
    </div>
  );
}

export default PortfolioDetails;
