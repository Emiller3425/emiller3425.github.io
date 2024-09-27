import React from 'react';
import ProjectItem from './ProjectItem';
import realEstateLogo from '../images/realEstateLogo.png';
import ninjaPlatformer from '../images/ninjaPlatformer.png';

function Projects() {
  return (
    <section className="projects mb-8">
      <h2 className="text-2xl border-b-2 border-gray-700 pb-2">Projects</h2>
      <ProjectItem
        id="real-estate-club"
        imgSrc={realEstateLogo}
        title="Real Estate Club GVSU Website"
        className="mt-4" // Add this line
        description="The Real Estate Club GVSU Website is a comprehensive platform designed to streamline the management and dissemination of information for the Real Estate Club at Grand Valley State University."
      />
      <ProjectItem
        id="pygame-platformer"
        imgSrc={ninjaPlatformer}
        title="Ninja Platformer"
        className="mt-4" // Add this line
        description="This Ninja Platformer was programmed in python using the Pygame library, all assets and animations were created by me in Aseprite, all sound effects we're created by me and music was open source on Upbeat. The project is deployed to the web using Pygbag."
      />
    </section>
  );
}

export default Projects;