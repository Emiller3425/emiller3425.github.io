import React from 'react';
import ProjectItem from './ProjectItem';
import realEstateLogo from '../images/realEstateLogo.png';
import ninjaPlatformer from '../images/ninjaPlatformer.png';
import draconicIsles from '../images/draconicisles.png'
import expo from '../images/expo.png'
import expo_voice from "../images/expo_voice.png"
import tess from '../images/tess.png'
import chai from '../images/chai.png'
import sage from '../images/sage.png'
import gordon_help from '../images/gordon_help.png'
import voxel from '../images/voxel.png'

import planetGenerator from '../images/planetGenerator.png'

function Projects() {
  return (
    <section className="projects py-12 bg-gray-900 text-gray-200 text-bone">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold border-b-4 border-red-500 inline-block pb-2 mb-6 text-bone">
          Conversation Design Experience
        </h2>
        <div className="project-list">
          <ProjectItem
            id="expo"
            imgSrc={expo}
            title="Expo"
            description="Expo is GFS's ordering platform assistant, specializing in providing product, invoice, and sales rep information. Leveraging both GenAI and traditional conversation design using NLU and conditionals."
          />
          <ProjectItem
            id="expoVoice"
            imgSrc={expo_voice}
            title="Expo Voice"
            description="Expo Voice is an assiatant in front of customer service and tech support that handles customer ETA inquiries."
          />
          <ProjectItem
            id="chai"
            imgSrc={chai}
            title="ChAI"
            description="GFS's internal sales rep assistant, specializing is providing customer truck ETA's, weekly KPI tracking, identfying new customer's, and vendor/broker information."
          />
          <ProjectItem
            id="tess"
            imgSrc={tess}
            title="Tess"
            description="GFS's public facing chatbot, assists with guided sign-up, product search, and connects to customer service."
          />
          <ProjectItem
            id="gordonHelp"
            imgSrc={gordon_help}
            title="Gordon Help"
            description="Gordon Help is an internal facing agent that handles IT Help Desk requests."
          />
          <ProjectItem
            id="sage"
            imgSrc={sage}
            title="Sage"
            description="Sage is an internal supplier facing chatbot."
          />
        </div>
      </div>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold border-b-4 border-red-500 inline-block pb-2 mb-6 text-bone">
          Personal Projects
        </h2>
        <div className="project-list">
        <ProjectItem
            id="voxel-game-engine"
            imgSrc={voxel}
            title="Voxel Game Engine"
            description="A C++ voxel engine using OpenGL that features procedural terrain generation via Perlin noise, optimized rendering using efficient meshing and frustum culling, texture mapping, and more inspired by Minecraft."
          />
          <ProjectItem
            id="real-estate-club"
            imgSrc={realEstateLogo}
            title="Real Estate Club GVSU Web App"
            description="A comprehensive platform designed to streamline the management and dissemination of information for the Real Estate Club at Grand Valley State University in React."
          />
          <ProjectItem
            id="planet-generator"
            imgSrc={planetGenerator}
            title="Planet Generator"
            description="A planet generator built using Pygame and Perlin noise."
          />
          <ProjectItem
            id="draconic-isles"
            imgSrc={draconicIsles}
            title="Draconic Isles"
            description="A top down Zelda dungeon crawler like with some dark souls elements in Pygame."
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
