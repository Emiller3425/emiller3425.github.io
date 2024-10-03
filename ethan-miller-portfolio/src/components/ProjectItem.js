import React from 'react';
import { Link } from 'react-router-dom';

function ProjectItem({ id, imgSrc, title, description }) {
  return (
    <Link to={`/projects/${id}`} className="project-item bg-gray-800 p-6 mb-6 rounded-lg transition-transform transform hover:scale-102">
      <div className="flex flex-col md:flex-row items-center">
        <img src={imgSrc} alt={title} className="project-image w-32 h-32 mb-4 md:mb-0 md:mr-6 border-4 border-gray-700 rounded-lg" />
        <div className="project-info text-gray-200">
          <h3 className="project-title text-2xl font-bold mb-2 text-bone">{title}</h3>
          <p className="mt-4 text-lg leading-relaxed">{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProjectItem;
