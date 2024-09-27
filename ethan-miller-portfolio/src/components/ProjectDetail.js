import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import reactImg from '../images/react.png';
import nodejsImg from '../images/nodejs.png';
import firestoreImg from '../images/firestore.png';
import tailwindcssImg from '../images/tailwindcss.png';
import homeImg from '../images/home.png';
import announcementsImg from '../images/announcements.png';
import calendarImg from '../images/calendar.png';
import aboutImg from '../images/about.png';
import resourcesImg from '../images/resources.png';
import pygameLogo from '../images/pygameLogo.jpeg';
import aesprite from '../images/aesprite.png';
import syndicationImg from '../images/syndication.png';

import upKeyImg from '../images/up_key.png';
import downKeyImg from '../images/down_key.png';
import leftKeyImg from '../images/left_key.png';
import rightKeyImg from '../images/right_key.png';
import spaceBarImg from '../images/space_bar.png';
import esc from '../images/esc.png';

const projectData = {
  'real-estate-club': {
    title: 'Real Estate Club GVSU Website',
    overview: `The Real Estate Club GVSU Website is a platform designed to streamline the management and dissemination of information for the Real Estate Club at Grand Valley State University.

The frontend is built using React, offering a dynamic and responsive user interface. The backend leverages Node.js and Firestore for robust data handling and user authentication.

Features include:

- Admin Access: Secured through a specific password, allowing only authorized members to update site content.
- User-Friendly Interface: Developed with React for an intuitive experience.
- Real-Time Updates: Firestore integration ensures instant reflection of changes.
- Security: Secure handling of user data and authentication with Node.js backend.
- Collaboration: Up-to-date information on events and meetings for better communication among members.`,
    link: 'https://gvsurealestateclub.com',
    technologies: [reactImg, nodejsImg, firestoreImg, tailwindcssImg],
    screens: [
      { imgSrc: homeImg, title: 'Home Screen', description: 'The welcoming interface with navigation options.' },
      { imgSrc: announcementsImg, title: 'Announcements Screen', description: 'Admins can post important updates and news.' },
      { imgSrc: syndicationImg, title: 'Syndication Project Screen', description: 'Overview of the syndication project with resources.' },
      { imgSrc: calendarImg, title: 'Calendar Screen', description: 'Overview of upcoming events and meetings.' },
      { imgSrc: aboutImg, title: 'Leadership Screen', description: 'Information about the club and executive board.' },
      { imgSrc: resourcesImg, title: 'Resources Screen', description: 'Documents available for club members to preview and download.' },
    ],
  },
  'pygame-platformer': {
    title: 'Ninja Platformer',
    overview: `The Ninja Platformer is a side-scrolling game built using Python and Pygame. This project allowed me to experiment with animations, particles, cameras, projectiles, sound effects, and more. The game features multiple levels with increasing difficulty, various obstacles, and enemies to challenge the player.

Key Features:

- Object-Oriented Programming: Developed using OOP principles and inheritance for scalable code.
- Multiple Levels: Progressively challenging levels with a variety of obstacles and enemies.
- Custom Assets: All visual assets and animations were created in Aseprite.
- Sound Design: Sound effects were self-recorded; background music is open source.
- Web Deployment: Deployed using Pygbag for browser playability, making the game easily accessible without downloads.`,
    iframeSrc: 'https://emiller3425.github.io/ninja_platformer/',
    technologies: [pygameLogo, aesprite],
    controls: {
      arrowKeys: [upKeyImg, downKeyImg, leftKeyImg, rightKeyImg],
      spaceBar: spaceBarImg,
      escKey: esc,
    },
  },
};

function ProjectDetail() {
  const { id } = useParams();
  const project = projectData[id];
  const [isLoading, setIsLoading] = useState(true);

  if (!project) {
    return (
      <div className="bg-gray-900 text-gray-200 min-h-screen flex items-center justify-center">
        <h2 className="text-2xl">Project not found</h2>
      </div>
    );
  }

  return (
    <div className="project-detail py-12 bg-gray-900 text-gray-200 min-h-screen">
      <div className="container mx-auto px-4">
        <Link to="/" className="text-red-500 hover:underline mb-4 inline-block">← Back to Home</Link>
        <h2 className="text-3xl font-bold mb-6 text-bone">{project.title}</h2>
        <div
          className="mb-6 leading-loose"
          dangerouslySetInnerHTML={{
            __html: project.overview.replace(/\n/g, '<br />'),
          }}
        />

        {project.link && (
          <p className="mb-6">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:underline"
            >
              Visit the Real Estate Club GVSU Website
            </a>
          </p>
        )}

        {project.technologies && (
          <>
            <h3 className="text-2xl mt-8 mb-4 text-bone">Technologies Used</h3>
            <div className="tech-used flex flex-wrap">
              {project.technologies.map((tech, index) => (
                <img
                  key={index}
                  src={tech}
                  alt="Tech Icon"
                  className="w-20 h-20 m-2 border-2 border-gray-700 rounded"
                />
              ))}
            </div>
          </>
        )}

        {/* Pygame Platformer Section */}
        {id === 'pygame-platformer' && project.iframeSrc && (
          <div className="mt-8">
            <div className="iframe-container relative flex justify-center">
              {isLoading && (
                <div className="loading-screen absolute inset-0 flex items-center justify-center bg-gray-800 rounded-lg">
                  <span className="text-lg text-gray-200">Loading...</span>
                </div>
              )}
              <iframe
                src={project.iframeSrc}
                width="50%"
                height="550px"
                title={project.title}
                allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated"
                sandbox="allow-same-origin allow-top-navigation allow-scripts allow-pointer-lock"
                className="rounded-lg shadow-lg"
                onLoad={() => setIsLoading(false)}
              ></iframe>
            </div>
            {/* Controls Section */}
            <div className="controls mt-8 flex flex-wrap justify-around text-center">
              <div className="control-item flex flex-col items-center m-4">
                <span className="text-xl mb-2">Movement</span>
                <div className="flex flex-col items-center">
                  <div className="flex justify-center items-center mb-2">
                    <img src={project.controls.arrowKeys[0]} alt="Up Key" className="w-10 h-10" />
                  </div>
                  <div className="flex justify-center items-center space-x-1">
                    <img src={project.controls.arrowKeys[2]} alt="Left Key" className="w-10 h-10" />
                    <img src={project.controls.arrowKeys[1]} alt="Down Key" className="w-10 h-10" />
                    <img src={project.controls.arrowKeys[3]} alt="Right Key" className="w-10 h-10" />
                  </div>
                </div>
              </div>
              <div className="control-item flex flex-col items-center m-4">
                <span className="text-xl mb-2">Attack</span>
                <img src={project.controls.spaceBar} alt="Space Bar" className="w-32 h-16 mt-2" />
              </div>
              <div className="control-item flex flex-col items-center m-4">
                <span className="text-xl mb-2">Pause</span>
                <img src={project.controls.escKey} alt="Escape" className="w-20 h-16 mt-2" />
              </div>
            </div>
          </div>
        )}

        {project.screens && (
          <>
            <h3 className="text-2xl mt-12 mb-6 text-bone">Screenshots</h3>
            {project.screens.map((screen, index) => (
              <div
                key={index}
                className={`image-text-container flex flex-col md:flex-row items-center mt-8 ${
                  index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <img
                  src={screen.imgSrc}
                  alt={screen.title}
                  className="w-full md:w-1/2 rounded-lg border-4 border-gray-700 "
                />
                <div className="md:w-1/2 md:ml-8 md:mr-8 mt-4 md:mt-0">
                  <h4 className="text-xl font-bold mb-2 text-bone">{screen.title}</h4>
                  <p>{screen.description}</p>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default ProjectDetail;