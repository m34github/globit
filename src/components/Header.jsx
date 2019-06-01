import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

class Header extends React.Component {
  render() {
    return (
      <>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6">Globit</Typography>
          </Toolbar>
        </AppBar>
      </>
    );
  }
}

export default Header;
