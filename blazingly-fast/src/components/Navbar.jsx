import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar">
        <h1>Fast</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="blog">Blog</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
          <select>
            <option value="eng">🇺🇸 ENG</option>
            <option value="ru">🇷🇺 RU</option>
            <option value="UZB">🇺🇿 UZB</option>
          </select>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
