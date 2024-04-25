import { Link } from "react-router-dom";
//import { langu } from "../lang/langu";
import "./Navbar.css";
import LanguContext from "../context/LangueContext";
import { useContext } from "react";
// Home
// Blog
// Contact
// Page
const Navbar = () => {
  const [language, setLanguage] = useContext(LanguContext);
  return (
    <div className="container">
      <div className="navbar">
        <h1>Fast</h1>
        <h1>{langu[language].navbar.logo}</h1>
        <ul>
          <li>
            <Link to="/">{langu[language].navbar.home}</Link>
          </li>
          <li>
            <Link to="blog">{langu[language].navbar.blog}</Link>
          </li>
          <li>
            <Link to="contact">{langu[language].navbar.contact}</Link>
          </li>
          <li>
            <Link to="page">{langu[language].navbar.page}</Link>
          </li>
          <select onChange={(evt) => setLanguage(evt.target)}>
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
