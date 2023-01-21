import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import close from "../../assets/fermer.svg";
import open from "../../assets/ouvert.svg";
import "../../utils/css/style.css";

function Dropdown() {
  const [dropdownStart, setDropdown] = useState(false);
  const handleOpen = () => {
    setDropdown(!dropdownStart);
  };

  return (
    <div className='dropdown'>
      <div className='dropdown__button' onClick={handleOpen}>
        <p className='dropdown__button--title menuHorizontal__link'>Profils</p>
        {dropdownStart ? (
          <img src={open} alt='icone ouverte' />
        ) : (
          <img src={close} alt='icone fermée' />
        )}
      </div>

      {dropdownStart ? (
        <nav className='dropdown__content'>
          <Link
            onClick={handleOpen}
            className='dropdown__link menuHorizontal__link active'
            to='/user/12'
          >
            Karl
          </Link>

          <Link
            onClick={handleOpen}
            className='dropdown__link menuHorizontal__link active'
            to='/user/18'
          >
            Cécilia
          </Link>
        </nav>
      ) : null}
    </div>
  );
}

export default Dropdown;
