/**
 * Selected the profil for see the informations [Home page]
 */

import React from "react";
import { Link } from "react-router-dom";
import karl from "../../assets/karl.png";
import cecilia from "../../assets/cecilia.png";

/**
 * @description Displays user profile images.
 * @returns {JSX} displaying the user profile images.
 */
const Profil = () => {
  return (
    <div className='reglage'>
      <Link to='/user/12'>
        <img className='reglage__img' src={karl} alt='Profil de Karl' />
      </Link>
      <Link to='/user/18'>
        <img className='reglage__img' src={cecilia} alt='Profil de Cécilia' />
      </Link>
    </div>
  );
};

export default Profil;
