import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

export default function Copyright({color}) {
  return (
    <Typography variant="body2" color={color} align="center">
      <MuiLink color="inherit" href="https://www.github.com/stevendelro/">
        Steven Del Rosario
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
