import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import adminAccessImg from '../images/admin-access.png';
import userInterfaceImg from '../images/user-interface.png';
import realTimeImg from '../images/real-time.png';
import securityImg from '../images/security.png';
import collaborationImg from '../images/collaboration.png';
import reactImg from '../images/react.png';
import nodejsImg from '../images/nodejs.png';
import firestoreImg from '../images/firestore.png';
import tailwindcssImg from '../images/tailwindcss.png';
import homeImg from '../images/home.png';
import announcementsImg from '../images/announcements.png';
import calendarImg from '../images/calendar.png';
import aboutImg from '../images/about.png';
import resourcesImg from '../images/resources.png';

const projectData = {
  'real-estate-club': {
    title: 'Real Estate Club GVSU Website',
    overview: 'The Real Estate Club GVSU Website is a comprehensive platform designed to streamline the management and dissemination of information for the Real Estate Club at Grand Valley State University.',
    frontend: 'The website is built using React, which offers a dynamic and responsive user interface, ensuring an optimal user experience across various devices.',
    backend: 'The backend leverages Node.js and Firestore, providing a robust and scalable environment to handle data and user authentication seamlessly.',
    api: 'The site utilizes API calls to fetch and update information dynamically, ensuring that the content remains current and relevant.',
    features: [
      { imgSrc: adminAccessImg, title: 'Admin Access', description: 'Secured through a specific password, allowing only authorized members to update site content.' },
      { imgSrc: userInterfaceImg, title: 'User-Friendly Interface', description: 'Developed with React for intuitive and interactive user experience.' },
      { imgSrc: realTimeImg, title: 'Real-Time Updates', description: 'Firestore integration for instant reflection of changes made through the admin dashboard.' },
      { imgSrc: securityImg, title: 'Security', description: 'Secure handling of user data and authentication with Node.js backend.' },
      { imgSrc: collaborationImg, title: 'Collaboration', description: 'Up-to-date information on events and meetings for better communication among members.' },
    ],
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
    overview: 'Description of project 2. What it does, technologies used, and your role.',
    // Add similar structure for other properties if available
  },
  'project-3': {
    title: 'Idk Yet',
    overview: 'Description of project 3. What it does, technologies used, and your role.',
    // Add similar structure for other properties if available
  }
  // Add more projects here
};

function ProjectDetail() {
  const { id } = useParams();
  const project = projectData[id];
  const [selectedTab, setSelectedTab] = useState('frontend');

  if (!project) {
    return <div>Project not found</div>;
  }

  const renderContent = () => {
    switch (selectedTab) {
      case 'frontend':
        return <p>{project.frontend}</p>;
      case 'backend':
        return <p>{project.backend}</p>;
      case 'api':
        return <p>{project.api}</p>;
      default:
        return null;
    }
  };

  return (
    <div className="project-detail p-8 bg-white rounded-lg shadow-lg">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">← Back to Home</Link>
      <h2 className="text-2xl mb-4">{project.title}</h2>
      <p className="mb-4">{project.overview}</p>

      <div className="tabs flex justify-around mb-4">
        <div
          className={`tab py-2 px-4 rounded-lg cursor-pointer ${selectedTab === 'frontend' ? 'bg-lavender-dark text-white' : 'bg-lavender-light'}`}
          onClick={() => setSelectedTab('frontend')}
        >
          Frontend
        </div>
        <div
          className={`tab py-2 px-4 rounded-lg cursor-pointer ${selectedTab === 'backend' ? 'bg-lavender-dark text-white' : 'bg-lavender-light'}`}
          onClick={() => setSelectedTab('backend')}
        >
          Backend
        </div>
        <div
          className={`tab py-2 px-4 rounded-lg cursor-pointer ${selectedTab === 'api' ? 'bg-lavender-dark text-white' : 'bg-lavender-light'}`}
          onClick={() => setSelectedTab('api')}
        >
          API Integration
        </div>
      </div>

      {renderContent()}

      {project.features && (
        <>
          <h3 className="text-xl mt-4">Features:</h3>
          <div className="features mt-2">
            {project.features.map((feature, index) => (
              <div key={index} className="feature flex items-center mb-2">
                <img src={feature.imgSrc} alt={feature.title} className="w-10 h-10 mr-4" />
                <div><strong>{feature.title}:</strong> {feature.description}</div>
              </div>
            ))}
          </div>
        </>
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
