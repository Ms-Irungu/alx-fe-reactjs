import PropTypes from 'prop-types';

function UserDetails({ userData }) {
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