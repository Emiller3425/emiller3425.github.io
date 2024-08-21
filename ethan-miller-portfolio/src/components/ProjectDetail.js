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
import flstudio from '../images/flstudio.png';

// Add imports for the control images
import upKeyImg from '../images/up_key.png';
import downKeyImg from '../images/down_key.png';
import leftKeyImg from '../images/left_key.png';
import rightKeyImg from '../images/right_key.png';
import spaceBarImg from '../images/space_bar.png';
import esc from '../images/esc.png';

const projectData = {
  'real-estate-club': {
    title: 'Real Estate Club GVSU Website',
    overview: `The Real Estate Club GVSU Website is a comprehensive platform designed to streamline the management and dissemination of information for the Real Estate Club at Grand Valley State University.
      The website is built using React, which offers a dynamic and responsive user interface, ensuring an optimal user experience across various devices.
      The backend leverages Node.js and Firestore, providing a robust and scalable environment to handle data and user authentication seamlessly.
      The site utilizes API calls to fetch and update information dynamically, ensuring that the content remains current and relevant.
      Features include:
      - Admin Access: Secured through a specific password, allowing only authorized members to update site content.
      - User-Friendly Interface: Developed with React for intuitive and interactive user experience.
      - Real-Time Updates: Firestore integration for instant reflection of changes made through the admin dashboard.
      - Security: Secure handling of user data and authentication with Node.js backend.
      - Collaboration: Up-to-date information on events and meetings for better communication among members.`,
    link: 'https://gvsurealestateclub.com',
    technologies: [reactImg, nodejsImg, firestoreImg, tailwindcssImg],
    screens: [
      { imgSrc: homeImg, title: 'Home Screen', description: 'This is the home screen of the Real Estate Club GVSU Website, showcasing the welcoming interface and navigation options for users.' },
      { imgSrc: announcementsImg, title: 'Announcements Screen', description: 'The announcements screen allows admins to post important updates and news, ensuring all members are informed of the latest happenings.' },
      { imgSrc: calendarImg, title: 'Calendar Screen', description: 'The calendar screen provides an overview of upcoming events and meetings, allowing members to stay organized and engaged with club activities.' },
      { imgSrc: aboutImg, title: 'About Screen', description: 'The About screen gives general information about the club and eboard member information as well.' },
      { imgSrc: resourcesImg, title: 'Resources Screen', description: 'The Resources screen provides documents that club members are able to utilize, they are able to preview and download these documents.' },
    ]
  },
  'pygame-platformer': {
    title: 'Pygame Platformer',
    overview: `The Pygame Platformer is a side-scrolling game built using Python and Pygame, leveraging Object-Oriented Programming (OOP) for a modular and maintainable codebase.
      The game includes:
      - OOP Structure: Developed using Python's OOP principles, ensuring scalable and easily maintainable code.
      - Multiple Levels: Features progressively challenging levels with a variety of obstacles, enemy AI, and interactive elements.
      - Custom Assets: All visual assets and animations were meticulously created in Aseprite, with attention to pixel-perfect detail.
      - Sound Design: Sound effects and background music were produced or edited in FL Studio, tailored to match the game’s aesthetic.
      - Web Deployment: Deployed using Pygbag for seamless browser play, making the game easily accessible without installation.
      - Engaging Gameplay: Combines smooth animations, responsive controls, and immersive audio for a captivating player experience.`,
    iframeSrc: 'https://emiller3425.github.io/ninja_platformer/', // Path to the Pygame project
    technologies: [pygameLogo, aesprite, flstudio],
    controls: {
      arrowKeys: [upKeyImg, downKeyImg, leftKeyImg, rightKeyImg],
      spaceBar: spaceBarImg,
      escKey: esc
    }
  },
};

function ProjectDetail() {
  const { id } = useParams();
  const project = projectData[id];

  // Add loading state
  const [isLoading, setIsLoading] = useState(true);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-detail p-8 bg-white rounded-lg shadow-lg">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">← Back to Home</Link>
      <h2 className="text-2xl mb-4">{project.title}</h2>
      <p className="mb-4 leading-loose whitespace-pre-line">
        {project.overview.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>

      {id === 'real-estate-club' && (
        <p className="mb-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Visit the Real Estate Club GVSU Website
          </a>
        </p>
      )}

      {project.technologies && (
        <>
          <h3 className="text-xl mt-4">Technologies Used:</h3>
          <div className="tech-used flex justify-around mt-2">
            {project.technologies.map((tech, index) => (
              <img key={index} src={tech} alt="Tech Icon" className="w-20 h-20" />
            ))}
          </div>
        </>
      )}

      {id === 'pygame-platformer' && project.iframeSrc && (
        <div className="mt-4 mx-auto" style={{ maxWidth: '735px' }}>
          <div className="iframe-container relative">
            {isLoading && (
              <div className="loading-screen absolute inset-0 flex items-center justify-center bg-gray-200 rounded-lg">
                <span className="text-lg text-gray-700">Loading...</span>
              </div>
            )}
            <iframe
              src={project.iframeSrc}
              width="100%"
              height="550px"
              title="Pygame Platformer"
              allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated"
              sandbox="allow-same-origin allow-top-navigation allow-scripts allow-pointer-lock"
              className="rounded-lg shadow-lg"
              onLoad={() => setIsLoading(false)}  // Hide the loading screen once iframe is loaded
            ></iframe>
          </div>
          <div className="controls mt-8 flex items-center justify-around space-x-12">
            <div className="control-item flex flex-col items-center">
              <span className="text-lg mb-2">Movement</span>
              <div className="flex flex-col items-center">
                <div className="flex justify-center items-center mb-2">
                  <img src={project.controls.arrowKeys[0]} alt="Up Key" className="w-12 h-12" />
                </div>
                <div className="flex justify-center items-center space-x-1">
                  <img src={project.controls.arrowKeys[2]} alt="Left Key" className="w-12 h-12" />
                  <img src={project.controls.arrowKeys[1]} alt="Down Key" className="w-12 h-12" />
                  <img src={project.controls.arrowKeys[3]} alt="Right Key" className="w-12 h-12" />
                </div>
              </div>
            </div>
            <div className="control-item flex flex-col items-center">
              <span className="text-lg mb-2">Attack</span>
              <img src={project.controls.spaceBar} alt="Space Bar" className="w-24 h-16 mt-2" />
            </div>
            <div className="control-item flex flex-col items-center">
              <span className="text-lg mb-2">Pause</span>
              <img src={project.controls.escKey} alt="Escape" className="w-8 h-8 mt-2" />
            </div>
          </div>
        </div>
      )}

      {project.screens && (
        <>
          <h3 className="text-xl mt-4">Screens:</h3>
          {project.screens.map((screen, index) => (
            <div key={index} className={`image-text-container flex items-center mt-4 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
              <img src={screen.imgSrc} alt={screen.title} className="w-1/2 rounded-lg mr-4 border-4 border-black" />
              <div>
                <h4 className="text-lg">{screen.title}</h4>
                <p>{screen.description}</p>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default ProjectDetail;
