/**
 * This function contains the menuHorizontal part that is shown on the top of the screen on this website,
 * and allow us to navigate between the different pages.
 */

import { Link } from "react-router-dom";
import Dropdown from "../Dropdown/dropdown";
import Logo from "../../assets/logo.svg";
import "../../utils/css/style.css";

/**
 * @returns {JSX} displaying the horizontal navbar
 */
function MenuHorizontal() {
  return (
    <nav className='menuHorizontal'>
      <Link to='/' className='menuHorizontal__logo'>
        <img src={Logo} alt='logo'></img>
      </Link>
      <Link className='menuHorizontal__link active' to='/'>
        Accueil
      </Link>
      <Dropdown />
      <Link className='menuHorizontal__link active' to='/setting'>
        Réglage
      </Link>
      <Link className='menuHorizontal__link active' to='/community'>
        Communauté
      </Link>
    </nav>
  );
}

export default MenuHorizontal;
