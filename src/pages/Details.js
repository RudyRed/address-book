import { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { withStyles } from '@material-ui/core';

import Layout from '../components/Layout/Layout';
import PersonCard from '../components/PersonCard';
import PersonContext from '../components/PersonContext';
import { getUser } from '../services';

const Details = ({ classes }) => {
  const [person, setPerson] = useContext(PersonContext);

  useEffect(() => {
    const getAndSetPerson = async () => {
      setPerson(await getUser());
    };

    if (!person) {
      // is details page is loaded directly so nothing in context
      getAndSetPerson();
    }
  }, []);

  return (
    <div className={classes.root}>
      <Helmet title="Details" />
      <Layout title="Details">
        <PersonCard
          firstName={person?.firstName}
          lastName={person?.lastName}
          phoneNumber={person?.phoneNumber}
          img={person?.largePicture}
        />
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
