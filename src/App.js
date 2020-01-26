import React from 'react';
import Header from './components/header/header';
import Home from './components/home/home';
import Profile from './components/profile/profile';
import Skill from './components/skill/skill';
import Tool from './components/tool/tool';
import Experience from './components/experience/experience';
import Portfolio from './components/portfolio/portfolio';
import Footer from './components/footer/footer';

//import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Profile />
      <Skill />
      <Tool />
      <Experience />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
