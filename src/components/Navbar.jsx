import { signOut } from 'firebase/auth';
import styled from 'styled-components'
import { auth } from '../firebase_config';
import { Link } from "react-router-dom";


const NavbarStyled = styled.nav`
  margin: 0;
  width: 100%;
  height: 80px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration: none;
`;


const Navbar = ({isAuth, setIsAuth}) => {
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <NavbarStyled>
      <Link to="/"> Home </Link>
        {!isAuth?
          (<Link to="/login"> Login </Link>):
          (
            <>
              <Link to="/createpost">Create Post</Link>
              <button onClick={signUserOut}>Log Out</button>
            </>
        )}
    </NavbarStyled>
  )
}

export default Navbar