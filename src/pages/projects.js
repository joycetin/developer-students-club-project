import './projects.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AppBar from '../components/AppBar.jsx';


function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('https://api.publicapis.org/entries?category=development&https=true').then((response) => {
      setProjects(response.data.entries.slice(0, 20));
    });
  }, []);

  return (
    <div className="projects-container">
      <AppBar />
      <h2 className="projects-heading">Our Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.API}>
            <img className="project-image" src={`https://picsum.photos/seed/${project.API}/400/300`} alt="" />
            <div className="project-details">
              <h3 className="project-title">{project.API}</h3>
              <p className="project-description">{project.Description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
