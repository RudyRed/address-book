import React from 'react';
import { Typography, withStyles } from '@material-ui/core';

const Layout = ({ children, classes, title }) => {
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h1">{title}</Typography>
      </div>
      <main className={classes.flex}>{children}</main>
    </div>
  );
};

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 750,
    minHeight: '100vh',
  },
  header: {
    margin: theme.spacing(2, 0, 1),
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  flex: { flex: 1 },
});

export default withStyles(styles, { withTheme: true })(Layout);
