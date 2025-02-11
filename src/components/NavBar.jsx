import PropTypes from "prop-types";
import "../styles/navbar.css";
import { CATEGORIES } from "../utils/Constants";

const NavBar = ({ onCategoryChange }) => {
  return (
    <nav id="navBar">
      {CATEGORIES.map((category) => (
        <span
          key={category.key}
          onClick={() => onCategoryChange(category.key)}
        >
          {category.label}
        </span>
      ))}
    </nav>
  );
};

NavBar.propTypes = {
  onCategoryChange: PropTypes.func.isRequired,
};

export default NavBar;
