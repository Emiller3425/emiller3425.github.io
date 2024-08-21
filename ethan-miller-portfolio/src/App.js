import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Footer from './components/Footer';
import './App.css';  // Ensure you have this import for your custom styles

function App() {
  return (
    <div className="flex flex-col min-h-screen gradient-bg">
      <Header />
      <div className="container mx-auto p-4 flex-1">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
