import PropTypes from 'prop-types';
import { useContext } from 'react';
import UserContext from './components/UserContext';

function UserDetails() {
    const userData = useContext(UserContext);
    
    return (
      <div>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
      </div>
    );
  }
  
  UserDetails.propTypes = {
    userData: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
  };

  export default UserDetails;