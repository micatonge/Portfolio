import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import font from './fonts/Gallient.ttf'
import { Routes ,Route, BrowserRouter } from 'react-router-dom';
import Homepage from './Homepage';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
  <Route exact path="/" component={<Homepage/>} />
  <Route path="/about" component={<About/>} />
  <Route path="/projects" component={<Projects/>} />
  <Route path="/resume" component={<Resume/>} />
  <Route path="/contact" component={<Contact/>} />
</Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

