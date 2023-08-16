


import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/Portfolio'>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
// ReactDOM.render(
//   <BrowserRouter>
//     <React.StrictMode>
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/resume" element={<Resume />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </React.StrictMode>
//   </BrowserRouter>,
//   document.getElementById('root')
// );