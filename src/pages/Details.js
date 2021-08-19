import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

import Layout from '../components/Layout/Layout';
import PersonCard from '../components/PersonCard';
import { getUser } from '../services';

const Details = ({ match }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const getAndSetUser = async () => {
      setUser(await getUser(match?.params.personId));
    };

    getAndSetUser();
  }, []);

  return (
    <div>
      <Helmet title="Details" />
      <Layout title="Details">
        <PersonCard {...user} />
      </Layout>
    </div>
  );
};

export default Details;
