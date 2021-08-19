import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

import List from '../components/List';
import Layout from '../components/Layout/Layout';
import { getUsers } from '../services';

const Home = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    const getAndSetUsers = async () => {
      const response = await getUsers();

      setUsers(response);
    };

    getAndSetUsers();
  }, []);

  return (
    <div>
      <Helmet title="Home" />
      <Layout title="Address Book">{users && <List data={users} />}</Layout>
    </div>
  );
};

export default Home;
