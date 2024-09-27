import React from 'react';
import ProjectItem from './ProjectItem';
import realEstateLogo from '../images/realEstateLogo.png';
import ninjaPlatformer from '../images/ninjaPlatformer.png';

function Projects() {
  return (
    <section className="projects py-12 bg-gray-900 text-gray-200 text-bone">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold border-b-4 border-red-500 inline-block pb-2 mb-6 text-bone">
          Projects
        </h2>
        <div className="project-list">
          <ProjectItem
            id="real-estate-club"
            imgSrc={realEstateLogo}
            title="Real Estate Club GVSU Website"
            description="A comprehensive platform designed to streamline the management and dissemination of information for the Real Estate Club at Grand Valley State University."
          />
          <ProjectItem
            id="pygame-platformer"
            imgSrc={ninjaPlatformer}
            title="Ninja Platformer"
            description="A side-scrolling game built with Python and Pygame, featuring custom assets and sound design."
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
