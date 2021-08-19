import { Avatar, Grid, Paper, Typography, withStyles } from '@material-ui/core';

const PersonCard = ({ classes, firstName, lastName, phoneNumber, img }) => {
  return (
    <Paper elevation={4} className={classes.root}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <Avatar className={classes.avatar} sizes="large" src={img} />
        </Grid>
        <Grid item>
          <Typography variant="h2">{firstName}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h2">{lastName}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h2">{phoneNumber}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

const styles = (theme) => ({
  root: {
    padding: theme.spacing(4),
  },
  avatar: {
    width: 150,
    height: 150,
    [theme.breakpoints.down('xs')]: {
      width: 100,
      height: 100,
    },
  },
});

export default withStyles(styles, { withTheme: true })(PersonCard);
