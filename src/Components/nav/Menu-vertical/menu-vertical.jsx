/**
 * This function contains the menuVertical part that is shown on the left of the screen on this website
 */

import React from "react";
import yogaIcon from "../../../assets/yoga.svg";
import natationIcon from "../../../assets/natation.svg";
import veloIcon from "../../../assets/velo.svg";
import musculationIcon from "../../../assets/musculation.svg";

function MenuVertical() {
  return (
    <div className='menuVertical'>
      <div className='menuVertical__icon'>
        <div className='menuVertical__icon--block'>
          <img className='icon' src={yogaIcon} alt='' />
        </div>
        <div className='menuVertical__icon--block'>
          <img className='icon' src={natationIcon} alt='' />
        </div>
        <div className='menuVertical__icon--block'>
          <img className='icon' src={veloIcon} alt='' />
        </div>
        <div className='menuVertical__icon--block'>
          <img className='icon' src={musculationIcon} alt='' />
        </div>
      </div>
      <p className='menuVertical__copyright'> Copiryght, SportSee 2020 </p>
    </div>
  );
}

export default MenuVertical;
