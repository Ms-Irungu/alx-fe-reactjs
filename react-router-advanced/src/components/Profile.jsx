import { Link, Routes, Route, Outlet } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>
      {/* Links for navigation inside Profile */}
      <nav>
        <Link to="/profile/details">Profile Details</Link>
        <Link to="/profile/settings">Profile Settings</Link>
      </nav>

      {/* <Outlet /> // This could apply if you used the nested routes in the App component and it would call the up */}

      {/* Define Nested Routes */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
};

export default Profile;
