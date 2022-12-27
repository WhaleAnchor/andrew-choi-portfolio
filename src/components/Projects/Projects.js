import React from 'react';
import { useState } from "react";
import "./Projects.css"
import { Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

//image imports
import LogoPng from "../../assets/logo.png"
import techBlog from "../../assets/techBlog.png"
import employeeTracker from "../../assets/employeeTracker.png"
import weatherDashboard from "../../assets/weatherDashboard.png"
import textEditor from "../../assets/textEditor.png"
import teamProfileMaker from "../../assets/teamProfileMaker.png"

const useStyles = makeStyles(theme => ({
  project_main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
  card: {
    width: '80%',
    height: 'auto',
    margin: '3rem',
  },
  media: {
    
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

const Projects = () => {
  const classes = useStyles();

  const projects = [
    {
      title: 'Tech Blog',
      image: `${techBlog}`,
      description: 'The Tech Blog website is a place where users can come and talk about any topics they like!',
      link: 'https://github.com/WhaleAnchor/Tech-Blog',
    },
    {
      title: 'Employee Tracker',
      image: `${employeeTracker}`,
      description: 'A command line application that allows user to interface with a sql database to manage their employees.',
      link: 'https://github.com/WhaleAnchor/Employee_Tracker',
    },
    {
      title: 'Weather Dashboard',
      image: `${weatherDashboard}`,
      description: 'A website that allows users to bring up the weather for the day and for the next five days for the city of their choice!',
      link: 'https://github.com/WhaleAnchor/weather-dashboard',
    },
    {
      title: 'Text Editor',
      image: `${textEditor}`,
      description: 'The J.A.T.E. Text Editor is a Progressive Web Application that runs in the browser.',
      link: 'https://github.com/WhaleAnchor/Text-Editor',
    },
    {
      title: 'Team Profile Maker',
      image: `${teamProfileMaker}`,
      description: 'A command line application that generates a page of employee information with user inputted data.',
      link: 'https://github.com/WhaleAnchor/Team-Profile-Maker',
    },
  ];

  return (
    <section id="Projects">
        <Container className={classes.project_main}>
            <div className='project'>
            {projects.map(project => (
                <Card key={project.title} className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={project.image}
                    title={project.title}
                />
                <CardContent className='description'>
                    <Typography gutterBottom variant="h5" component="h2">
                    {project.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    {project.description}
                    </Typography>
                    <Link
                    component="button"
                    variant="body2"
                    onClick={() => {
                      window.location.replace(`${project.link}`)
                    }}
                    >
                    Check out my project!
                    </Link>
                </CardContent>
                </Card>
            ))}
            </div>
        </Container>
    </section>
  );
};

export default Projects;
