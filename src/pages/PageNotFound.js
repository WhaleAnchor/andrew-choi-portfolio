import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(8),
  },
  message: {
    marginBottom: theme.spacing(2),
  },
}));

const PageNotFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.message}>
        Oops! The page you're looking for couldn't be found.
      </Typography>
      <Button component={Link} to="/" variant="contained" color="primary">
        Go to homepage
      </Button>
    </div>
  );
};

export default PageNotFound;
