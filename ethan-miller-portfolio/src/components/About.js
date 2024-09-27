import React from 'react';
import Projects from './Projects';

function About() {
  return (
    <div>
      <section className="about mb-8">
        <h2 className="text-2xl border-b-2 border-gray-700 pb-2">About Me</h2>
        <p className="mt-4">Hello! I'm Ethan Miller, I've loved video games my whole life, which has been a major inspiration for my development journey. In addition to my passion for coding, I enjoy working out, snowboarding, and playing baseball as hobbies.
                            I develop chatbots professionally, and this portfolio showcases my side and passion projects.</p>
      </section>
      <Projects />
    </div>
  );
}

export default About;