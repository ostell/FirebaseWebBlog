import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from "react-router-dom";
import Home from "./pages/Home"
import CreatePost from "./pages/CreatePost"
import Login from "./pages/Login"
import { useState } from "react";
import Navbar from "./components/Navbar";



function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  
  return (
    <Router>
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>
        <Route path="/" element={(<Home isAuth={isAuth}/>)}></Route>
        <Route path="/createpost" element={<CreatePost isAuth={isAuth}/>}></Route>
        <Route path="/login" element={<Login isAuth={isAuth} setIsAuth={setIsAuth}/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
