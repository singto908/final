import { Routes, Route} from "react-router-dom";
import Login from './Login';
import Profile from './Profile';
import Navbar from './Navbar';
import User from './User';
import Usercreate from "./Usercreate";
import UserUpdate from "./UserUpdate";
import Register from "./Register";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="create" element={<Usercreate />} />
        <Route path="update/:id" element={<UserUpdate />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
