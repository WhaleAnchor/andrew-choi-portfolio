/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import './About.css';

import profile from '../../assets/me.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    minHeight: '100vw',
    marginBottom: "auto",
  },
}));

export const About = () => {
  const classes = useStyles();
  const greetings = "Hello!";
  const aboutme = `I'm Andrew Choi, a Full-Stack web developer. 
                  I love a good challenge and am always seeking for something new!
                  My projects below includes various works from MySQL to NOSQL to a full MERN stack application!
                  `;

  return (
    <section id="About">
        <Container component="main" className={classes.main} maxWidth="md">
            <div className="about">
            <div className="_img"
                style={{ 
                background: "url(" + profile + ")",
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                }}
            >
            </div>
            <div className="about_content_wrapper">
                <Typography component='h2' variant="h5">
                    {greetings}
                </Typography>
                <p className="aboutme">
                {aboutme}
                </p>
                <div href="#contact" className="contact-btn">
                <i className="fas fa-terminal"></i>
                <Typography>
                    <a href="#Contact" className="contactMe"> Contact Me! </a> 
                </Typography>
                </div>
            </div>
            </div>
        </Container>
    </section>
  );
};

export default About;