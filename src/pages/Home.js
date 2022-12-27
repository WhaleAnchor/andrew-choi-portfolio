import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


import Navbar from '../components/Navbar/Navbar';
import Projects from '../components/Projects/Projects';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Navbar/>
        <main className="main">
          <>
            <About/>
            <Projects/>
            <Contact/>
          </>
        </main>
      </div>
    </>
  );
}

export default Home;
