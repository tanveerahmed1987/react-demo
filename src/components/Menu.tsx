import { Link } from "react-router-dom";
import { Nav } from "./styles";

export const Menu: React.FC = () => {
  return (
    <Nav>
      <Link to="/timer">Timer App</Link>
      <Link to="/counter">Counter App</Link>
      <Link to="/geo">Geo App</Link>
    </Nav>
  );
};
