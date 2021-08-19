import React from 'react';
import { Typography, withStyles } from '@material-ui/core';

const Layout = ({ children, classes, title }) => {
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h1" className={classes.title}>
          {title}
        </Typography>
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
    paddingBottom: theme.spacing(4),
    maxWidth: 650,
    minHeight: '100vh',
  },
  header: {
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(2, 0, 1, 2),
    },
  },
  title: {
    color: 'white',
    fontWeight: 600,
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  flex: { flex: 1 },
});

export default withStyles(styles, { withTheme: true })(Layout);
