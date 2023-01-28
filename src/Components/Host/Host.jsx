/**
 * Welcome text
 */

import PropTypes from "prop-types";

/**
 * @description Custom Hello word with personal name of user
 * @param {String} name
 * @returns element HTML
 */
function Host({ name }) {
  return (
    <div className='salutation'>
      <h2 className='salutation__title'>
        Bonjour <span>{name}</span>
      </h2>
      <p className='salutation__text'>
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
}

export default Host;

Host.prototype = {
  name: PropTypes.string.isRequired,
};
