import PropTypes from 'prop-types';
function UserProfile(props) {
    return (
        <div style = {{border: '1px solid gray', margin: '10px', padding: '10px'}}>
            <h2 style={{color: 'blue'}}>{props.name}</h2>
            <p>Age: <span style={{fontWeight: 'bold'}}>{props.age}</span></p>
            <p>Bio: {props.bio}</p>
        </div>
    );
};

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  bio: PropTypes.string.isRequired,
};

export default UserProfile;

