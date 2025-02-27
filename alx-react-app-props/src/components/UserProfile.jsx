import PropTypes from 'prop-types';
import { useContext } from 'react';
import UserContext from './components/UserContext';

function UserProfile() {
    const userData = useContext(UserContext);

    return (
        <div>
            <h2>{userData.name}</h2>
            <p>Age: {userData.age}</p>
            <p>Bio: {userData.bio}</p>
        </div>
    );
};

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  bio: PropTypes.string.isRequired,
};

export default UserProfile;

