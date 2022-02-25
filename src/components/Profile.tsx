import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Auth } from "../contexts/AuthContext";
import { Body } from "../styles/body";

function Profile() {
  const navigate = useNavigate();
  const [auth, setAuth] = useContext(Auth);
  const login = JSON.parse(localStorage.getItem('login') || '');
  const exit = () => {
    localStorage.clear();
    setAuth(false);
    navigate('/login');
  }
  return (
    <Body>
      <Main>
        <h2>Здравствуйте, {login}</h2>
        <button onClick={exit}>Выйти</button>
      </Main>
    </Body>
  )
}

export default Profile;

const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;