/**
 * Welcome text
 */

import PropTypes from "prop-types";

/**
 * @description Custom Hello word with personal name of user
 * @param {String} name
 * @returns {JSX} displaying the Welcome words for the user
 */
function Host({ name }) {
  /**
   * @description Returns the current time of day
   * @return {number} L'heure actuelle de la journée (entre 0 et 23)
   */
  function hourOfTheDay() {
    return new Date().getHours();
  }

  /**
   * @description Greeting based on the time of day
   * @return {String} A greeting according to the time of day: 'Good morning' if the time is less than 5 p.m. and greater than 6 a.m., 'Good evening' otherwise
   */
  function renderSalut() {
    const hour = hourOfTheDay();
    if (hour >= 17 || hour < 6) {
      return "Bonsoir";
    }
    return "Bonjour";
  }

  const salutation = renderSalut();

  return (
    <div className='salutation'>
      <h2 className='salutation__title'>
        {salutation} <span>{name}</span>
      </h2>
      <p className='salutation__text'>
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
}

export default Host;

Host.propTypes = {
  name: PropTypes.string,
};
