import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

function Home() {
  const [selected, setSelected] = useState('projects');
  const location = useLocation();

  useEffect(() => {
    // Update the selected item in the navbar when the URL hash changes
    const hash = location.hash.substring(1);
    setSelected(hash || 'projects');
  }, [location]);

  return (
    <div className="home">
      <Navbar selected={selected} setSelected={setSelected} />
      <main className="main">
        <Switch>
          <Route path="#projects" component={Projects} />
          <Route path="#about" component={About} />
          <Route path="#contact" component={Contact} />
          <Route component={Projects} />
        </Switch>
      </main>
    </div>
  );
}

export default Home;
