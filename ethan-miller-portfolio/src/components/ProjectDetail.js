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
import syndicationImg from '../images/syndication.png';

import pygameLogo from '../images/pygameLogo.jpeg';
import aesprite from '../images/aesprite.png';
import dialogflowCXLogo from '../images/dialogflow.svg';
import gemini from '../images/gemini.png';
import vercel from '../images/vercel.jpeg';

import cpp from '../images/cpp.png';
import openGL from '../images/openGL.png';
import voxelTerrain from '../images/voxel_terrain.png';
import voxelTerrainInside from '../images/voxel_terrain_inside.png';
import frustrumCulling from '../images/frustrum_culling.png';
import skybox from '../images/skybox.png'


import upKeyImg from '../images/up_key.png';
import downKeyImg from '../images/down_key.png';
import leftKeyImg from '../images/left_key.png';
import rightKeyImg from '../images/right_key.png';
import spaceBarImg from '../images/space_bar.png';
import esc from '../images/esc.png';
import f from '../images/f.png';
import i from '../images/i.png';
import e from '../images/e.png';
import q from '../images/q.png';

import expo_welcome from '../images/expo_flows/expo_welcome_intent.png';
import expo_product_search from '../images/expo_flows/product_search.png';
import expo_product_search_2 from '../images/expo_flows/product_search_2.png';
import expo_product_details from '../images/expo_flows/product_details.png';
import expo_product_details_2 from '../images/expo_flows/product_details_2.png';
import expo_recipe_search from '../images/expo_flows/recipe_search.png';
import expo_recipe_builder from '../images/expo_flows/recipe_builder.png';
import expo_recipe_builder_2 from '../images/expo_flows/recipe_builder_2.png';
import expo_view_full_recipe from '../images/expo_flows/view_full_recipe.png';
import expo_add_to_cart from '../images/expo_flows/add_to_cart.png';
import expo_innoserv_request from '../images/expo_flows/innoserv_request.png';
import expo_innoserv_request_2 from '../images/expo_flows/innoserv_request_2.png';
import expo_innoserv_request_3 from '../images/expo_flows/innoserv_request_3.png';
import expo_measurement_conversions from '../images/expo_flows/measurement_conversions.png';
import expo_sales_rep from '../images/expo_flows/sales_rep.png';
import expo_inside_sales_rep from '../images/expo_flows/inside_sales_rep.png';
import expo_track_truck from '../images/expo_flows/track_truck.png';
import expo_view_invoices from '../images/expo_flows/view_invoices.png';
import expo_view_line_items from '../images/expo_flows/view_line_items.png';
import expo_live_agent from '../images/expo_flows/live_agent.png';
import expo_live_agent_sa from '../images/expo_flows/live_agent_sa.png';

import tess_welcome from '../images/tess_flows/tess_welcome.png';
import tess_food_cost_tools from '../images/tess_flows/food_cost_tools.png';
import tess_live_agent from '../images/tess_flows/live_agent.png';
import tess_become_a_customer from '../images/tess_flows/become_a_customer.png';
import tess_become_a_customer_2 from '../images/tess_flows/become_a_customer_2.png';
import tess_become_a_customer_3 from '../images/tess_flows/become_a_customer_3.png';
import tess_become_a_customer_4 from '../images/tess_flows/become_a_customer_4.png';
import tess_become_a_customer_5 from '../images/tess_flows/become_a_customer_5.png';
import tess_product_search from '../images/tess_flows/product_search.png';
import tess_product_search_2 from '../images/tess_flows/product_search_2.png';

import chai_welcome from '../images/chai_flows/chai_welcome.png';
import chai_dt from '../images/chai_flows/chai_dt.png';
import chai_forms from '../images/chai_flows/chai_forms.png';
import chai_vb from '../images/chai_flows/chai_vb.png';
import chai_wtc from '../images/chai_flows/chai_wtc.png';
import chai_customer_eta from '../images/chai_flows/chai_customer_eta.png';
import chai_sales_kpi from '../images/chai_flows/chai_sales_kpis.png';
import chai_customer_prospects from '../images/chai_flows/chai_customer_prospects.png';
import chai_customer_prospects_2 from '../images/chai_flows/chai_customer_prospects_2.png';
import chai_customer_prospects_3 from '../images/chai_flows/chai_customer_prospects_3.png';
import chai_purchase_order from '../videos/po_flow.mp4';

import gordon_help_welcome from '../images/gordon_help_flows/welcome_message.png'


import sage_welcome from '../images/sage_flows/sage_welcome.png';
import sage_rs from '../images/sage_flows/region_specific.png';

const projectData = {
  'voxel-game-engine': {
    title: 'Voxel Game Engine',
    overview: `This is an infinite voxel world generation engine that uses seeding and perlin noise for terrain generation.

<b>Key Features:</b>

- <b>Procedural Voxel Terrain:</b> Generated expansive 3D voxel landscapes using Perlin noise algorithms for natural-looking terrain features.
- <b>Mesh Generation:</b> Implemented meshing to convert raw voxel data into optimized, renderable triangle meshes.
- <b>Texture Mapping:</b> Applied textures to the generated terrain mesh usinf fragment and vertex shaders, providing visual detail and definition to surfaces.
- <b>Performance Optimization:</b> Integrated frustum culling to significantly improve rendering speed by discarding terrain chunks not visible to the camera. Uses instance drawing to send less draw calls to the GPU.
- <b>Immersive Environment:</b> Rendered a skybox to create a surrounding atmospheric or space background, enhancing visual immersion.
- <b>Core Engine in C++:</b> Developed the primary engine logic, including terrain generation, meshing, and rendering pipeline, in C++.`,
    technologies: [cpp, openGL, aesprite],
  },
  'real-estate-club': {
    title: 'Real Estate Club GVSU Web App',
    overview: `The Real Estate Club GVSU Web App is a platform designed to streamline the management and dissemination of information for the Real Estate Club at Grand Valley State University.

The frontend is built using React, offering a dynamic and responsive user interface. The backend leverages Node.js and Firestore for robust data handling and user authentication.

Features include:

- Admin Access: Secured through a specific password, allowing only authorized members to update site content.
- User-Friendly Interface: Developed with React for an intuitive experience.
- Real-Time Updates: Firestore integration ensures instant reflection of changes.
- Security: Secure handling of user data and authentication with Node.js backend.
- Collaboration: Up-to-date information on events and meetings for better communication among members.
- Automated emails whenever announcements are posted by admins`,
    link: 'https://gvsurealestateclub.com',
    technologies: [vercel, reactImg, nodejsImg, firestoreImg, tailwindcssImg],
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

<b>Key Features:</b>

- <b>Object-Oriented Programming:</b> Developed using OOP principles and inheritance for scalable code.
- <b>Multiple Levels:</b> Progressively challenging levels with a variety of obstacles and enemies.
- <b>Custom Assets:</b> All visual assets and animations were created in Aseprite.
- <b>Sound Design:</b> Sound effects were self-recorded; background music is open source.
- <b>Web Deployment:</b> Deployed using Pygbag for browser playability, making the game easily accessible without downloads.`,
    iframeSrc: 'https://emiller3425.github.io/ninja_platformer/',
    technologies: [pygameLogo, aesprite],
    controls: {
      arrowKeys: [upKeyImg, downKeyImg, leftKeyImg, rightKeyImg],
      spaceBar: spaceBarImg,
      escKey: esc,
    },
  },
  'draconic-isles': {
    title: 'Draconic Isles',
    overview: `Draconic Isles is a top down dungeon crawler-esk game, this project taught me the entensiveness of having seperate game loops for menus, how to create an inventory and leveling system, saving and loading progress from files, and allowed me to improve on my animation skills. There is currently no sound in this game and the level provided in game is mostly a demo to show off my learnings.

<b>Key Features:</b>

- <b>Seperate Game Loops:</b> Utilized these for in-game menus as well as the start screen.
- <b>Inventory and Loot System:</b> Allows for collection of items fromm chests as a drop system and abillity to swap out weapons and spells from the items within the inventory.
- <b>Progression:</b> Allows for level-ups after collection experience from enemies, this collected expirience is dropped on death and can be re-collected.
- <b>Enemy Pathfinding:</b> Implemented A* using the tilemap coordinants for enemy pathfinding to simulate chasing the player.
- <b>Web Deployment:</b> Deployed using Pygbag for browser playability, making the game easily accessible without downloads.`,
    iframeSrc: 'https://emiller3425.github.io/draconic_isles/',
    technologies: [pygameLogo, aesprite],
    controls: {
      arrowKeys: [upKeyImg, downKeyImg, leftKeyImg, rightKeyImg],
      escKey: esc,
      f: f,
      i: i,
      e: e,
      q: q,
    },
  },
  'planet-generator': {
    title: 'Planet Generator',
    overview: `Creates randomly generated planets at the click of a button!

<b>Key Features:</b>

- <b>Procedural Terrain Generation:</b> Utilizes Perlin noise to create realistic and varied planetary surfaces, ensuring each planet is unique.
- <b>Dynamic Rotation and Axis Tilt:</b> Allows planets to rotate around multiple axes with adjustable tilt angles using matrix multiplication, enhancing visual diversity.
- <b>Randomized Color Palettes:</b> Generates unique and visually appealing color schemes for each planet, ensuring every creation stands out.
- <b>Realistic Cloud Simulation:</b> Implements cloud patterns and movements using Perlin noise, adding depth and realism to the planet's atmosphere.
- <b>Interactive Controls:</b> Features a user-friendly button to generate new planets on demand, refreshing colors and rotation parameters seamlessly.
- <b>Starfield Background:</b> Creates a dense and dynamic starfield to provide a stunning cosmic backdrop for the generated planets.
- <b>Dynamic Lighting:</b> Implements a realistic lighting system where the brightness of each terrain feature is calculated based on the angle between its surface normal and a fixed light direction. This simulates day-night cycles and provides realistic shading, enhancing the visual depth and immersion of the planet.`,
    iframeSrc: 'https://emiller3425.github.io/planet_generator/',
    features: [{ imgSrc: homeImg, title: 'Home Screen', description: 'The welcoming interface with navigation options.' }],
    technologies: [pygameLogo, aesprite],
  },
  
  'expo': {
    title: 'Expo',
    overview: `Expo is an all in one assistant for customer's on our ordering platform. This is an authenticated chatbot providing customers with an all in one personalized assistant.
    
   <b>Key Features:</b>

    - Product Search, Details, and Recipe helping customers create new menu items
    - Truck ETAs for updates on deliveries
    - Sales Rep information at the click of a button
    `,
    technologies: [dialogflowCXLogo, gemini],
    features: [{ imgSrc: homeImg, title: 'Home Screen', description: 'The welcoming interface with navigation options.' }],
    welcome_image: expo_welcome,
  },
  'tess': {
    title: 'Tess',
    overview: `<p>Tess is a public facing agent that focuses on the customer sign-up process and product discovery. You can use Tess on <a href="https://gfs.com/en-us/" target="_blank"><font color=f56565><u>gfs.com</u></font></a>, <a href="https://gfs.ca/en-ca/" target="_blank"><font color=f56565><u>gfs.ca</u></font></a> and <a href="https://gfsstore.com" target="_blank"><font color=f56565><u>gfsstore.com</u></font></a>.</p>
    
    <b>Key Features:</b>

    - Product Search and discovery using generative AI to identify user query intent
    - Customer Sign-up and Menu X-ray
    `,
    technologies: [dialogflowCXLogo, gemini],
    features: [{ imgSrc: homeImg, title: 'Home Screen', description: 'The welcoming interface with navigation options.' }],
    welcome_image: tess_welcome,
  },
  'chai': {
    title: 'ChAI',
    overview: `ChAI is an internal agent focused on servicing sales reps with mobile accessibility through Google Chat.
    
    <b>Key Features:</b>

    - Customer Truck ETAs
    - Weekly KPI Tracking
    - Customer Lead Generation
    `,
    technologies: [dialogflowCXLogo, gemini],
    features: [{ imgSrc: homeImg, title: 'Home Screen', description: 'The welcoming interface with navigation options.' }],
    welcome_image: chai_welcome,
  },
  'gordonHelp': {
    title: 'Gordon Help',
    overview: `Gordon Help is an internal agent focused on answering IT Help Desk queries using ServiceNow articles as a knowledge base with accessibility through Google Chat.
    
    <b>Key Features:</b>
    - ServiceNow Knowledge base
    `,
    technologies: [dialogflowCXLogo, gemini],
    features: [{ imgSrc: gordon_help_welcome, title: 'Home Screen', description: 'The welcoming interface with navigation options.' }],
    welcome_image: gordon_help_welcome,
  },
  'sage': {
    title: 'Sage',
    overview: `Sage is a supplier facing agent that focuses on supporting our product suppliers.
    
    <b>Key Features:</b>

    - FAQ questions
    `,
    technologies: [dialogflowCXLogo, gemini],
    features: [{ imgSrc: homeImg, title: 'Home Screen', description: 'The welcoming interface with navigation options.' }],
    welcome_image: sage_welcome,
  },
};

function ProjectDetail() {
  const { id } = useParams();
  const project = projectData[id];
  const [isLoading, setIsLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

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

        {project.welcome_image && id !== 'chai' && (
          <div>
            <img
              src={project.welcome_image}
              alt="Tech Icon"
              className="w-80 h-120 m-2 border-2 border-gray-700 rounded"
            />
          </div>
        )}

        {project.welcome_image && id === 'chai' && (
          <div>
            <img
              src={project.welcome_image}
              alt="Tech Icon"
              className="w-100 h-140 m-2 border-2 border-gray-700 rounded"
            />
          </div>
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

        {/* Chatbots Structure */}
        {(id === 'expo' || id === 'tess' || id === 'chai' || id === 'sage') && (
          <h3 className="text-3xl mt-8 mb-4 text-bone font-bold">Flows</h3>
        )}
        {id === 'expo' && (
          <>
            <h3 className="text-2xl mt-8 mb-4 text-bone">Product Search</h3>
            <p>The Product Search flow within Expo allows users to use natural language as part of product discovery, and remembers previous context for follow-up questions. This flow is also accessible to users at the click of a button when they receive no search results within our traditional search bar.</p>
            <br />
            <div className="flex flex-wrap items-start"> {/* Changed from flex-row */}
              <img
                src={expo_product_search}
                alt="Product Search Flow"
                className="w-60 h-100 m-2 border-2 border-gray-700 rounded"
              />
              <img
                src={expo_product_search_2}
                alt="Product Search Flow 2"
                className="w-60 h-100 m-2 border-2 border-gray-700 rounded"
              />
            </div>
            <h3 className="text-2xl mt-8 mb-4 text-bone">Product Details</h3>
            <p>The Product Details flow allows users to ask detailed questions about our products, including but not limited to: nutrition info, serving sizes, ingredients and allergens, and thaw instructions. This flow also provides a chip after the details response, allowing the user to pull up a single image carousel of the item to quickly add to cart or be linked to the product page on our ordering platform. This flow is a RAG feature, utilizing LLMs to format responses based on data returned from API calls.</p>
            <br />
            <div className="flex flex-wrap items-start"> {/* Changed from flex-row */}
              <img
                src={expo_product_details}
                alt="Product Details Flow"
                className="w-60 h-100 m-2 border-2 border-gray-700 rounded"
              />
              <img
                src={expo_product_details_2}
                alt="Product Details Flow 2"
                className="w-60 h-100 m-2 border-2 border-gray-700 rounded"
              />
            </div>
            <h3 className="text-2xl mt-8 mb-4 text-bone">Recipe Builder</h3>
            <p>The Recipe Builder flow allows users to receive product searches tailored to their recipe, shop ingredients to receive a list of different ingredients for their recipe, as well as receive a full ingredients list and prep instructions from an LLM for their specific recipe.</p>
            <br />
            <div className="flex flex-wrap items-start"> {/* Changed from flex-row */}
              <img
                src={expo_recipe_search}
                alt="Recipe Search Flow"
                className="w-60 h-100 m-2 border-2 border-gray-700 rounded"
              />
              <img
                src={expo_recipe_builder}
                alt="Recipe Builder Flow"
                className="w-60 h-100 m-2 border-2 border-gray-700 rounded"
              />
              <img
                src={expo_recipe_builder_2}
                alt="Recipe Builder Flow 2"
                className="w-60 h-100 m-2 border-2 border-gray-700 rounded"
              />
              <img
                src={expo_view_full_recipe}
                alt="View Full Recipe Flow"
                className="w-60 h-100 m-2 border-2 border-gray-700 rounded"
              />
            </div>
            <h3 className="text-2xl mt-8 mb-4 text-bone">Add To Cart</h3>
            <p>The Add To Cart flow allows users to add items directly from chat to their cart. If the item is not currently orderable by that customer, the add to cart button is replaced with a 'Contact Rep' button where they can work with their rep to order that item.</p>
            <br />
            <div className="flex flex-wrap items-start"> {/* Changed from flex-row */}
              <img
                src={expo_add_to_cart}
                alt="Add To Cart Flow"
                className="w-60 h-100 m-2 border-2 border-gray-700 rounded"
              />
            </div>
            <h3 className="text-2xl mt-8 mb-4 text-bone">InnoServ Request</h3>
            <p>The InnoServ Request flow allows users to submit a request for service on their equipment contracted by InnoServ.</p>
            <br />
            <div className="flex flex-wrap items-start"> {/* Changed from flex-row */}
              <img
                src={expo_innoserv_request}
                alt="InnoServ Request Flow"
                className="w-60 h-100 m-2 border-2 border-gray-700 rounded"
              />
              <img
                src={expo_innoserv_request_2}
                alt="InnoServ Request Flow 2"
                className="w-60 h-100 m-2 border-2 border-gray-700 rounded"
              />
              <img
                src={expo_innoserv_request_3}
                alt="InnoServ Request Flow 3"
                className="w-60 h-100 m-2 border-2 border-gray-700 rounded"
              />
            </div>
            <h3 className="text-2xl mt-8 mb-4 text-bone">Measurement Conversions</h3>
            <p>The Measurement Conversions flow allows users to receive measurement conversions generated by an LLM.</p>
            <br />
            <div className="flex flex-wrap items-start"> {/* Changed from flex-row */}
              <img
                src={expo_measurement_conversions}
                alt="Measurement Conversions Flow"
                className="w-60 h-100 m-2 border-2 border-gray-700 rounded"
              />
            </div>
            <h3 className="text-2xl mt-8 mb-4 text-bone">Live Agent</h3>
            <p>The Live Agent flow allows users to connect to a Tech Support Rep directly through Incontact, delivering a seamless chat-to-human experience. If it's outside of live agent hours, we provide sales rep information.</p>
            <br />
            <div className="flex flex-wrap items-start"> {/* Changed from flex-row */}
              <img
                src={expo_live_agent}
                alt="Live Agent Flow"
                className="w-60 h-100 m-2 border-2 border-gray-700 rounded"
              />
            </div>
            <h3 className="text-2xl mt-8 mb-4 text-bone">Sentiment Analysis</h3>
            <p>Sentiment Analysis detects user sentiment, and if it dips below the threshold, we offer a live agent to the user. If it's outside of live agent hours, we provide sales rep information.</p>
            <br />
            <div className="flex flex-wrap items-start"> {/* Changed from flex-row */}
              <img
                src={expo_live_agent_sa}
                alt="Sentiment Analysis Flow"
                className="w-60 h-100 m-2 border-2 border-gray-700 rounded"
              />
            </div>
            <h3 className="text-2xl mt-8 mb-4 text-bone">Sales Rep</h3>
            <p>The Sales Rep flows allow users to easily access their sales rep and inside sales rep contact information.</p>
            <br />
            <div className="flex flex-wrap items-start"> {/* Changed from flex-row */}
              <img
                src={expo_sales_rep}
                alt="Sales Rep Flow"
                className="w-60 h-100 m-2 border-2 border-gray-700 rounded"
              />
              <img
                src={expo_inside_sales_rep}
                alt="Inside Sales Rep Flow"
                className="w-60 h-100 m-2 border-2 border-gray-700 rounded"
              />
            </div>
            <h3 className="text-2xl mt-8 mb-4 text-bone">Track Truck</h3>
            <p>The Truck Tracker flow allows users to receive live ETAs of their truck deliveries.</p>
            <br />
            <div className="flex flex-wrap items-start"> {/* Changed from flex-row */}
              <img
                src={expo_track_truck}
                alt="Track Truck Flow"
                className="w-60 h-100 m-2 border-2 border-gray-700 rounded"
              />
            </div>
            <h3 className="text-2xl mt-8 mb-4 text-bone">View Invoices</h3>
            <p>The View Invoice flow allows users to view their most recent invoices within chat. This feature also enables the user to see each invoice's line items as well.</p>
            <br />
            <div className="flex flex-wrap items-start"> {/* Changed from flex-row */}
              <img
                src={expo_view_invoices}
                alt="View Invoices Flow"
                className="w-60 h-100 m-2 border-2 border-gray-700 rounded"
              />
              <img
                src={expo_view_line_items}
                alt="View Line Items Flow"
                className="w-60 h-100 m-2 border-2 border-gray-700 rounded"
              />
            </div>
          </>
        )}
        {id === 'tess' && (
          <>
            <h3 className="text-2xl mt-8 mb-4 text-bone">Become A Customer</h3>
            <p>The Become A Customer Flow enables customer sign-up through the chatbot. A feature within this flow is menu x-ray, which allows potential customers to upload a picture of their menu, and then we are able to pre-populate an order guide using generative AI.</p>
            <br />
            <div className="flex flex-wrap items-start"> {/* Changed from flex-row */}
              <img
                src={tess_become_a_customer}
                alt="Become A Customer Flow"
                className="w-60 h-100 m-2 border-2 border-gray-700 rounded"
              />
              <img
                src={tess_become_a_customer_2}
                alt="Become A Customer Flow 2"
                className="w-60 h-100 m-2 border-2 border-gray-700 rounded"
              />
              <img
                src={tess_become_a_customer_3}
                alt="Become A Customer Flow 3"
                className="w-60 h-100 m-2 border-2 border-gray-700 rounded"
              />
              <img
                src={tess_become_a_customer_4}
                alt="Become A Customer Flow 4"
                className="w-60 h-100 m-2 border-2 border-gray-700 rounded"
              />
              <img
                src={tess_become_a_customer_5}
                alt="Become A Customer Flow 5"
                className="w-60 h-100 m-2 border-2 border-gray-700 rounded"
              />
            </div>
            <h3 className="text-2xl mt-8 mb-4 text-bone">Product Search</h3>
            <p>The Product Search flow within Tess allows users to use natural language as part of product discovery, and remembers previous context for follow-up questions. This flow is also accessible to users at the click of a button when they receive no search results within our traditional search bar.</p>
            <br />
            <div className="flex flex-wrap items-start"> {/* Changed from flex-row */}
              <img
                src={tess_product_search}
                alt="Product Search Flow"
                className="w-60 h-100 m-2 border-2 border-gray-700 rounded"
              />
              <img
                src={tess_product_search_2}
                alt="Product Search Flow 2"
                className="w-60 h-100 m-2 border-2 border-gray-700 rounded"
              />
            </div>
            <h3 className="text-2xl mt-8 mb-4 text-bone">Live Agent</h3>
            <p>The Live Agent flow allows users to connect to a Tech Support Rep directly through Incontact, delivering a seamless chat-to-human experience. If it's outside of live agent hours, we offer the customer contact form.</p>
            <br />
            <div className="flex flex-wrap items-start"> {/* Changed from flex-row */}
              <img
                src={tess_live_agent}
                alt="Live Agent Flow"
                className="w-60 h-100 m-2 border-2 border-gray-700 rounded"
              />
            </div>
            <h3 className="text-2xl mt-8 mb-4 text-bone">Food Cost Tools</h3>
            <p>Showcases our users some of the tech tools we offer potential customers, enabling them to sign up for demos to learn more.</p>
            <br />
            <div className="flex flex-wrap items-start"> {/* Changed from flex-row */}
              <img
                src={tess_food_cost_tools}
                alt="Food Cost Tools Flow"
                className="w-60 h-100 m-2 border-2 border-gray-700 rounded"
              />
            </div>
          </>
        )}
        {id === 'chai' && (
          <>
            <h3 className="text-2xl mt-8 mb-4 text-bone">Customer ETAs</h3>
            <p>Allows sales reps to look up customer ETAs using customer names and numbers. No actual ETAs are returned below because of the use of a pre-prod agent and data.</p>
            <br />
            <div className="flex flex-wrap items-start"> {/* Changed from flex-row */}
              <img
                src={chai_customer_eta}
                alt="Customer ETAs Flow"
                className="w-100 h-140 m-2 border-2 border-gray-700 rounded"
              />
            </div>
            <h3 className="text-2xl mt-8 mb-4 text-bone">Purchase Orders</h3>
            <p>This feature was developed in collaboration with the supply chain team and allows sales reps to look up Purchase Order tracking information and case amounts.</p>
            <br />
            <div className="flex flex-wrap items-start"> {/* Changed from flex-row */}
            <video
                src={chai_purchase_order}
                className="w-100 h-140 m-2 border-2 border-gray-700 rounded"
                controls
                aria-label="Customer ETAs Flow"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <h3 className="text-2xl mt-8 mb-4 text-bone">Vendor and Broker</h3>
            <p>Allows Sales Reps to look up vendor and broker information using their divisional information.</p>
            <br />
            <div className="flex flex-wrap items-start"> {/* Changed from flex-row */}
              <img
                src={chai_vb}
                alt="Vendor and Broker Flow"
                className="w-100 h-140 m-2 border-2 border-gray-700 rounded"
              />
            </div>
            <h3 className="text-2xl mt-8 mb-4 text-bone">Digital Tools</h3>
            <p>Allows Sales Reps to learn more about the digital tools we offer to enable them to help customers learn more as well.</p>
            <br />
            <div className="flex flex-wrap items-start"> {/* Changed from flex-row */}
              <img
                src={chai_dt}
                alt="Digital Tools Flow"
                className="w-100 h-140 m-2 border-2 border-gray-700 rounded"
              />
            </div>
            <h3 className="text-2xl mt-8 mb-4 text-bone">Who To Call</h3>
            <p>The Who To Call flow helps provide reps with contact information for day-to-day problems or questions they may run into.</p>
            <br />
            <div className="flex flex-wrap items-start"> {/* Changed from flex-row */}
              <img
                src={chai_wtc}
                alt="Who To Call Flow"
                className="w-100 h-140 m-2 border-2 border-gray-700 rounded"
              />
            </div>
            <h3 className="text-2xl mt-8 mb-4 text-bone">Forms</h3>
            <p>Allows Reps to easily access any forms they may need to fill out.</p>
            <br />
            <div className="flex flex-wrap items-start"> {/* Changed from flex-row */}
              <img
                src={chai_forms}
                alt="Forms Flow"
                className="w-100 h-140 m-2 border-2 border-gray-700 rounded"
              />
            </div>
            <h3 className="text-2xl mt-8 mb-4 text-bone">Weekly Sales KPIs</h3>
            <p>Allows users to track their weekly case sales within Google Chat, current metrics allow for tracking of weekly case sales and account receivable percentages.</p>
            <br />
            <div className="flex flex-wrap items-start">  {/* Changed from flex-row */}
            <img
                src={chai_sales_kpi}
                alt="Forms Flow"
                className="w-100 h-140 m-2 border-2 border-gray-700 rounded"
              />
            </div>
            <h3 className="text-2xl mt-8 mb-4 text-bone">Customer Leads</h3>
            <p>Allows users to query the bot to validate existing customers and additionally view potential lead information to help bring new busines to GFS.</p>
            <br />
            <br></br>
            <p><b>Verifying existing customers:</b></p>
            <div className="flex flex-wrap items-start">  {/* Changed from flex-row */}
            </div>
            <br></br>
            <img
                src={chai_customer_prospects}
                alt="Forms Flow"
                className="w-100 h-140 m-2 border-2 border-gray-700 rounded"
              />
              <br></br>
              <br></br>
              <p><b>Identifying leads/prospects customers allows users to select chat chips to return prospect inforamtion:</b></p>
              <br></br>
              <img
                src={chai_customer_prospects_2}
                alt="Forms Flow"
                className="w-100 h-140 m-2 border-2 border-gray-700 rounded"
              />
              
              <img
                src={chai_customer_prospects_3}
                alt="Forms Flow"
                className="w-100 h-140 m-2 border-2 border-gray-700 rounded"
              />
          </>
        )}
        {id === 'sage' && (
          <>
            <h3 className="text-2xl mt-8 mb-4 text-bone">Region Specific Docs</h3>
            <p>Allows us to provide region-specific information to suppliers (US/CA).</p>
            <br />
            <div className="flex flex-wrap items-start"> {/* Changed from flex-row */}
              <img
                src={sage_rs}
                alt="Region Specific Docs Flow"
                className="w-60 h-100 m-2 border-2 border-gray-700 rounded"
              />
            </div>
          </>
        )}

        {/* Real Estate Club Section*/}
        {id === 'real-estate-club' && (
          
          <p className="mb-6">
            <br />
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

        {/* Voxel Game Engine Section */}
        {id === 'voxel-game-engine' && (
          <div className="mt-8">
            <h3 className="text-2xl mt-8 mb-4 text-bone">Terrain & Mesh Culling</h3>
            <p>Terrain is rendered using a mesh that is a culmination of 16 x 16 x 16 chunks to build the world. The mesh currently using occlusion culling, face culling, and frustrum culling for performance. It is currently being rendered on the main thread, but I will be implementing multi-threading to have chunk generation and mesh updating on seperate threads for performance.</p>
            <br />
            <div className="flex flex-wrap items-start"> {/* Ensured flex-wrap is here */}
              <img
                src={voxelTerrain}
                alt="Voxel Terrain"
                className="w-80 h-100 m-2 border-2 border-gray-700 rounded"
              />
              <img
                src={voxelTerrainInside}
                alt="Voxel Terrain Inside"
                className="w-80 h-100 m-2 border-2 border-gray-700 rounded"
              />
              <img
                src={frustrumCulling}
                alt="Frustrum Culling"
                className="w-80 h-100 m-2 border-2 border-gray-700 rounded"
              />
            </div>
            <h3 className="text-2xl mt-8 mb-4 text-bone">Skybox</h3>
            <p>Skybox is rendered using a cubemap to simulate a larger world than the camera is actually within.</p>
            <br />
            <img
                src={skybox}
                alt="Skybox"
                className="w-80 h-100 m-2 border-2 border-gray-700 rounded"
              />
            {/**<h3 className="text-2xl mt-8 mb-4 text-bone">Lighting - Day & Night Cycle</h3>
            <p>Needs more work</p>
            <br /> /** */}
          </div>
        )}
        
        {/* Planet Generator Section */}
        {id === 'planet-generator' && project.iframeSrc && (
          <div className="mt-8">
            <div className="iframe-container relative flex justify-center">
              {isLoading && (
                <div className="loading-screen absolute inset-0 flex items-center justify-center bg-gray-800 rounded-lg">
                  <span className="text-lg text-gray-200">Loading...</span>
                </div>
              )}
              <div className="max-w-[600px] max-h-[575px] aspect-[1.2] relative w-full">
                <iframe
                  src={project.iframeSrc}
                  title={project.title}
                  allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated"
                  sandbox="allow-same-origin allow-top-navigation allow-scripts allow-pointer-lock"
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  onLoad={() => setIsLoading(false)}
                ></iframe>
              </div>
            </div>
          </div>
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
              <div className="max-w-[600px] max-h-[575px] aspect-[1.2] relative w-full">
                <iframe
                  src={project.iframeSrc}
                  title={project.title}
                  allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated"
                  sandbox="allow-same-origin allow-top-navigation allow-scripts allow-pointer-lock"
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  onLoad={() => setIsLoading(false)}
                ></iframe>
              </div>
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

        {/* Draconic Isles Section */}
        {id === 'draconic-isles' && project.iframeSrc && (
          <div className="mt-8">
            <div className="iframe-container relative flex justify-center">
              {isLoading && (
                <div className="loading-screen absolute inset-0 flex items-center justify-center bg-gray-800 rounded-lg">
                  <span className="text-lg text-gray-200">Loading...</span>
                </div>
              )}
              <div className="max-w-[600px] max-h-[550px] aspect-[1.2] relative w-full">
                <iframe
                  src={project.iframeSrc}
                  title={project.title}
                  allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated"
                  sandbox="allow-same-origin allow-top-navigation allow-scripts allow-pointer-lock"
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  onLoad={() => setIsLoading(false)}
                ></iframe>
              </div>
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
                <span className="text-xl mb-2">Melee</span>
                <img src={project.controls.q} alt="Q" className="w-16 h-16 mt-2" />
              </div>
              <div className="control-item flex flex-col items-center m-4">
                <span className="text-xl mb-2">Spell</span>
                <img src={project.controls.e} alt="E" className="w-16 h-16 mt-2" />
              </div>
              <div className="control-item flex flex-col items-center m-4">
                <span className="text-xl mb-2">Interact</span>
                <img src={project.controls.f} alt="F" className="w-16 h-16 mt-2" />
              </div>
              <div className="control-item flex flex-col items-center m-4">
                <span className="text-xl mb-2">Inventory</span>
                <img src={project.controls.i} alt="I" className="w-16 h-16 mt-2" />
              </div>
              <div className="control-item flex flex-col items-center m-4">
                <span className="text-xl mb-2">Close Menu</span>
                <img src={project.controls.escKey} alt="Escape" className="w-16 h-16 mt-2" />
              </div>
            </div>
          </div>
        )}

        {/* Updated Screenshots Section */}
        {project.screens && (
          <>
            <h3 className="text-2xl mt-12 mb-6 text-bone">Screenshots</h3>
            <div className="relative flex justify-center items-center mt-8">
              {currentSlide > 0 && (
                <button
                  onClick={() => setCurrentSlide(currentSlide - 1)}
                  className="absolute left-4 text-4xl text-gray-200 hover:text-red-500 z-10"
                >
                  &#8249;
                </button>
              )}

              <img
                src={project.screens[currentSlide].imgSrc}
                alt={project.screens[currentSlide].title}
                className="w-full max-w-[900px] rounded-lg border-4 border-gray-700"
              />

              {currentSlide < project.screens.length - 1 && (
                <button
                  onClick={() => setCurrentSlide(currentSlide + 1)}
                  className="absolute right-4 text-4xl text-gray-200 hover:text-red-500 z-10"
                >
                  &#8250;
                </button>
              )}
            </div>
            <div className="text-center mt-4">
              <h4 className="text-xl font-bold mb-2 text-bone">
                {project.screens[currentSlide].title}
              </h4>
              <p>{project.screens[currentSlide].description}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProjectDetail;