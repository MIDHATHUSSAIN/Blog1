import { Route, Routes } from "react-router-dom";
import NAVBAR from "./Components/NavBar";
import LOGIN from "./Pages/Login";
import SIGNUP from "./Pages/SignUp";
import HOME from "./Pages/Home";
import CreateBlog from "./Pages/CreateBlog";
import MYBlog from "./Pages/MyBlog";
import AuthContext from "./Context/AuthContext";
import Admin from "./Pages/Admin";
import Protected from "./Protected/Protection";
import roles from './utiles/roles'
import Author from "./Pages/Admin";
import ADMIN from "./Pages/Admin";


function App() {
  return (
    <div className="App">
        <AuthContext>
        <NAVBAR></NAVBAR>
        <Routes>
          <Route path="/login" element={<LOGIN/>}></Route>
          <Route path="/signup" element={<SIGNUP></SIGNUP>}></Route>
          <Route path="/" element={<HOME></HOME>}></Route>
          <Route path="/create-blog" element={<CreateBlog></CreateBlog>}></Route>
          <Route path="/my-blog" element={<MYBlog></MYBlog>}></Route>
          <Route element = {<Protected></Protected>}>
            <Route path="/admin" element = {<ADMIN></ADMIN>}></Route>
          </Route>
        </Routes>
        
        </AuthContext>
    </div>
  );
}

export default App;
