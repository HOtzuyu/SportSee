import { Link } from "react-router-dom";

/**
 * This function display the Error component.
 * @returns {JSX} The JSX for displaying the error message and a link to the home page.
 */
function Error() {
  return (
    <div className='error'>
      <h1 className='error__number'>404</h1>
      <h2 className='error__text'>
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <div className='error__back'>
        <Link className='error__back--text' to='/'>
          Retourner sur la page d'accueil
        </Link>
      </div>
    </div>
  );
}

export default Error;
