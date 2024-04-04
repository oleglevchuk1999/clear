import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    background: '#3D0000',
    borderRadius: 3,
    border: 0,
    color: '#FF0000',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px #FF0000',
    margin: '0 20px',
  },
};

function MyButton(props) {
  const { classes, children, className, ...other } = props;

  return (
    <Button className={clsx(classes.root, className)} {...other}>
      {children}
    </Button>
  );
}

MyButton.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(MyButton);