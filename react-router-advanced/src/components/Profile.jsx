import {Link, Outlet} from 'react-router-dom'

const Profile = () => {
    return (
        <div>
        <h1>Profile Page</h1>
        <nav>
            <Link to="details">Profile Details</Link>
            <Link to="settings">Profile Settings</Link>
        </nav>
        <Outlet /> {/*Outlet is used to render nested routes*/}
        </div>
    )
}

export default Profile;