import React from 'react';
import ProjectItem from './ProjectItem';

function Projects() {
  return (
    <section className="projects mb-8">
      <h2 className="text-2xl border-b-2 border-gray-700 pb-2">Projects</h2>
      <ProjectItem
        id="real-estate-club"
        imgSrc="images/realEstateLogo copy.png"
        title="Real Estate Club GVSU Website"
        description="The Real Estate Club GVSU Website is a comprehensive platform designed to streamline the management and dissemination of information for the Real Estate Club at Grand Valley State University."
      />
      <ProjectItem
        id="pygame-platformer"
        imgSrc="images/ninja_platformer.png"
        title="Pygame Platformer"
        description="Description of project 2. What it does, technologies used, and your role."
      />
      <ProjectItem
        id="project-3"
        imgSrc="project3-thumbnail.jpg"
        title="Idk Yet"
        description="Description of project 3. What it does, technologies used, and your role."
      />
    </section>
  );
}

export default Projects;
