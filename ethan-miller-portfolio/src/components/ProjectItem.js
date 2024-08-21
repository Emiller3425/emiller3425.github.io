import React from 'react';
import { Link } from 'react-router-dom';

function ProjectItem({ id, imgSrc, title, description }) {
  return (
    <Link to={`/projects/${id}`} className="project-item flex items-center bg-white p-4 mb-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <img src={imgSrc} alt={title} className="project-image w-24 h-24 mr-4 border border-gray-400 rounded-lg" />
      <div className="project-info">
        <h3 className="project-title text-xl font-bold">{title}</h3>
        <p className="project-description text-sm text-gray-700">{description}</p>
      </div>
    </Link>
  );
}

export default ProjectItem;
