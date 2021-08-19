import { Helmet } from 'react-helmet-async';

import Layout from '../components/Layout/Layout';
import PersonCard from '../components/PersonCard';

const Details = ({ match }) => {
  console.log(match?.params.personId, 'props');
  return (
    <div>
      <Helmet title="Details" />
      <Layout title="Details">
        <PersonCard
          firstName="William"
          lastName="Gross"
          phoneNumber="647-230-9876"
        />
      </Layout>
    </div>
  );
};

export default Details;
