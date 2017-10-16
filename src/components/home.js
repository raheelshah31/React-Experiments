import React, { PropTypes } from 'react';
import PersistentDrawer from './material/PersistentDrawer'

const Home = ({ name, onNameChange }) =>
  <div>
    <PersistentDrawer/>
  </div>;

Home.propTypes = {
  name: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired
};

export default Home;
