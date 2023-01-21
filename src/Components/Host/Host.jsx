import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getUser } from "../../mocks/data";

function Host() {
  const { id } = useParams();

  const [error, setError] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    async function init() {
      try {
        let response = await getUser(id);
        setUser(response.data);
      } catch (err) {
        console.log("===== error =====", err);
        setError(true);
      }
    }
    init();
  }, [id]);

  if (error) {
    return <span>Oups il y a eu un problème</span>;
  }
  return (
    <div className='salutation'>
      <h2 className='salutation__title'>
        Bonjour <span>{user?.userInfos?.firstName}</span>
      </h2>
      <p className='salutation__text'>
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
}

export default Host;
