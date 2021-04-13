import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: grid;
  > a {
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: bolder;

    background-color: rgba(89, 89, 89, 0.1);
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    border: 0px solid rgba(255, 255, 255, 0.18);
    box-shadow: rgba(14, 14, 14, 0.19) 0px 6px 15px 0px;
    -webkit-box-shadow: rgba(14, 14, 14, 0.19) 0px 6px 15px 0px;
    border-radius: 25px;
    -webkit-border-radius: 25px;
    /* color: rgba(128, 128, 128, 0.4); */
    padding: 20px;
    width: 300px;
    height: 10%;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(30px);
      -webkit-backdrop-filter: blur(30px);
      border: 0px solid rgba(255, 255, 255, 0.18);
      box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
      -webkit-box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
      border-radius: 25px;
      -webkit-border-radius: 25px;
      color: rgba(119, 10, 10, 0.3);
    }
  }
`;

export const Menu: React.FC = () => {
  return (
    <Nav>
      <Link to="/timer">Timer App</Link>
      <Link to="/counter">Counter App</Link>
      <Link to="/geo">Geo App</Link>
    </Nav>
  );
};
