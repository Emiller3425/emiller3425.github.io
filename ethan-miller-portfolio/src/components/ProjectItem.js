import React from 'react';
import { Link } from 'react-router-dom';

function ProjectItem({ id, imgSrc, title, description }) {
  return (
    <Link to={`/projects/${id}`} className="project-item flex items-center bg-white my-4 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-lavender-light text-black no-underline">
      <img src={imgSrc} alt={`${title} Thumbnail`} className="w-24 h-24 rounded-lg mr-4" />
      <div>
        <h3 className="text-xl mb-2">{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default ProjectItem;
