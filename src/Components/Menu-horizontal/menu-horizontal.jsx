import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Dropdown from "../Dropdown/dropdown";
import Logo from "../../assets/logo.svg";
import "../../utils/css/style.css";

/**
 * This function contains the menuHorizontal part that is shown on the top of the screen on this website,
 * and allow us to navigate between the different pages.
 */
function MenuHorizontal() {
  return (
    <nav className='menuHorizontal'>
      <Link to='/' className='menuHorizontal__logo'>
        <img src={Logo} alt='logo'></img>
      </Link>
      {useLocation().pathname === "/" ? (
        <Link className='menuHorizontal__link active' to='/'>
          Accueil
        </Link>
      ) : (
        <Link className='menuHorizontal__link' to='/'>
          Accueil
        </Link>
      )}
      <Dropdown />
      {useLocation().pathname === "/setting" ? (
        <Link className='menuHorizontal__link active' to='/setting'>
          Réglage
        </Link>
      ) : (
        <Link className='menuHorizontal__link' to='/setting'>
          Réglage
        </Link>
      )}
      {useLocation().pathname === "/community" ? (
        <Link className='menuHorizontal__link active' to='/community'>
          Communauté
        </Link>
      ) : (
        <Link className='menuHorizontal__link' to='/community'>
          Communauté
        </Link>
      )}
    </nav>
  );
}

export default MenuHorizontal;
