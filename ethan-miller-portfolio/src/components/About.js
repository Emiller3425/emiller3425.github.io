import React from 'react';
import Projects from './Projects';

function About() {
  return (
    <div>
      <section className="about mb-8">
        <h2 className="text-2xl border-b-2 border-gray-700 pb-2">About Me</h2>
        <p className="mt-4">Hello! I'm Ethan Miller, a passionate developer with experience in [my skills]. This portfolio showcases some of my projects.</p>
      </section>
      <Projects />
    </div>
  );
}

export default About;
