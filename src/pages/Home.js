import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { withStyles } from '@material-ui/core';

import List from '../components/List';
import Layout from '../components/Layout/Layout';
import { getUsers } from '../services';

const Home = ({ classes }) => {
  const [users, setUsers] = useState();

  useEffect(() => {
    const getAndSetUsers = async () => {
      const response = await getUsers();

      setUsers(response);
    };

    getAndSetUsers();
  }, []);

  return (
    <div className={classes.root}>
      <Helmet title="Home" />
      <Layout title="Address Book">{users && <List data={users} />}</Layout>
    </div>
  );
};

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
  },
});

export default withStyles(styles, { withTheme: true })(Home);
