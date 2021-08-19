import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { withStyles } from '@material-ui/core';

import Layout from '../components/Layout/Layout';
import PersonCard from '../components/PersonCard';
import { getUser } from '../services';

const Details = ({ classes, match }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const getAndSetUser = async () => {
      setUser(await getUser(match?.params.personId));
    };

    getAndSetUser();
  }, []);

  return (
    <div className={classes.root}>
      <Helmet title="Details" />
      <Layout title="Details">
        <PersonCard {...user} />
      </Layout>
    </div>
  );
};

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
  },
});

export default withStyles(styles, { withTheme: true })(Details);
