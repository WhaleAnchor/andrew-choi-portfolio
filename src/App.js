import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

function Layout() {
  const [selected, setSelected] = useState('home');
  const location = useLocation();

  useEffect(() => {
    // Update the selected item in the navbar when the URL changes
    const path = location.pathname.substring(1);
    setSelected(path || 'home');
  }, [location]);

  return (
    <div className="layout">
      <Navbar selected={selected} setSelected={setSelected} />
      <main className="main">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={Home} />
        </Switch>
      </main>
    </div>
  );
}

export default Layout;
