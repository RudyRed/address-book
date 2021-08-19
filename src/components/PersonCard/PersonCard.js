import { Paper, Grid, Typography } from '@material-ui/core';

const PersonCard = ({ firstName, lastName, phoneNumber }) => {
  return (
    <Paper elevation={4}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
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

export default PersonCard;
