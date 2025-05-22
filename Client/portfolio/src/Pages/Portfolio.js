// PortfolioPage.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function PortfolioPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('https://portfolio-backend-liou.onrender.com/api/projects')
      .then(response => { //test3213
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching the data: ', error);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="my-4">Portfolio</h1>
      <div className="row">
        {projects.map(project => (
          <div key={project.id} className="col-md-4 mb-4">
            <Link
              to={`/portfolio/${project.id}`}
              className="text-decoration-none text-dark"
            >
              <div className="card h-100 shadow-sm">
                <img
                  src="https://via.placeholder.com/400x200"
                  className="card-img-top"
                  alt={`${project.title} Portfolio`}
                />
                <div className="card-body">
                  <h5 className="card-title text-uppercase">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                </div>
                <div className="card-footer d-flex justify-content-between">
                  <button className="btn btn-primary btn-sm">View More</button>
                  <a
                    href={`/${project.cvFile}`}
                    download
                    className="btn btn-outline-dark btn-sm"
                    onClick={(e) => e.stopPropagation()} // Prevent link override
                    onMouseDown={(e) => e.stopPropagation()}
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortfolioPage;
