import ProfilePage from './ProfilePage';
import UserContext from './components/UserContext';


function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com", age: 25, bio: "Hello, my name is Jane Doe. I am a software developer." };

  return (
  <UserContext.Provider value={userData}>
    <ProfilePage />
  </UserContext.Provider>
  )
  
}

export default App;