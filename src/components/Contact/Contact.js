import React from 'react';
import { Container, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import './Contact.css'

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '150px',
    marginBottom: "3em",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  form: {
    width: '100%',
  },
  formfield: {
    width: '100%',
    marginBottom: '2rem',
  },
}));

const Contact = () => {
  const classes = useStyles();
  const [subject, setSubject] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSubjectChange = event => {
    setSubject(event.target.value);
  };

  const handleMessageChange = event => {
    setMessage(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    // Build the "mailto:" link with the subject and message as query parameters
    const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

    // Open the email client with the "mailto:" link
    window.location.href = mailtoLink;
  };

  return (
      <Container component="main" className={classes.main} id="Contact">
        <div className="contact">
          <div className="_form_wrapper">
            <form onSubmit={handleSubmit} className={classes.form}>
              <TextField
                label="Subject"
                value={subject}
                onChange={handleSubjectChange}
                className={classes.formfield}
              />
              <br />
              <TextField
                label="Message"
                multiline
                value={message}
                onChange={handleMessageChange}
                className={classes.formfield}
              />
              <br />
              <Button type="submit" variant="contained" color="primary">
                Send
              </Button>
            </form>
          </div> 
        </div>
      </Container>
);
};

export default Contact;
