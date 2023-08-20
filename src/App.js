import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Components/Auth/Login";
import { useState } from 'react';
import Home from './Pages/Home';

function App() {
  const [userData,setUserData] = useState({});
  const updateUserDataFromChild = (data)=>{
    setUserData(data);
  }
  return (
    <div className='App'>
      {Object.keys(userData).length !== 0 ? (
        <Home userData={userData} updateUserData={updateUserDataFromChild} />
      ) : (
        <Login updateUserData={updateUserDataFromChild} />
      )}
    </div>
  );
}

export default App;
