import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import ProjectDetail from './components/ProjectDetail';
import Footer from './components/Footer';
import './index.css'; // Ensure your global styles are imported

function App() {
  return (
      <div className="flex flex-col min-h-screen bg-gray-900 text-gray-200">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
  );
}

export default App;
