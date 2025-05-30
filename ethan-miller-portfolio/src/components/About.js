import React from 'react';
import Projects from './Projects';

function About() {
  return (
    <div className="bg-gray-900">
      <section className="about py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold border-b-4 border-red-500 inline-block pb-2 mb-6 text-bone">
            About Me
          </h2>
          <p className="mt-4 text-lg leading-relaxed">
            Hello! I'm <span className="text-red-500 font-semibold">Ethan Miller</span>, a passionate developer with a lifelong love for video games, which has been a major inspiration for my journey in development. Beyond coding, I enjoy working out, snowboarding, and playing baseball. Professionally, I develop chatbots for <span className="text-red-500 font-semibold">Gordon Food Service</span>  and this portfolio showcases my <span className="text-red-500 font-semibold">Conversation Design</span> work as well as side projects.
          </p>
        </div>
      </section>
      <Projects />
    </div>
  );
}

export default About;
