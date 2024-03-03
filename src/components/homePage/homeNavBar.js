import { Link } from "react-router-dom";
import "./homeNavBar.css";

const HomeNavBar = () => {
  return (
    <div>
      <nav className="contain">
        <div style={{padding:`3vh`}}>
          <Link to='/user/:userName'>
          <img src="/logo.png" className="logo" alt="logo"></img>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default HomeNavBar;
