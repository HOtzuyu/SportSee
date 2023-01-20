import { Link } from "react-router-dom";

/**
 * This function contains the Error component that is shown when the URL asked doesn't exist.
 */
function Error() {
  return (
    <div className='wrapper d-flex flex-column align-items-center'>
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <div className='err-back'>
        <Link className='backlink text-danger' to='/'>
          Retourner sur la page d'accueil
        </Link>
      </div>
    </div>
  );
}

export default Error;
