import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getUser } from "../../mocks/data";

import MenuVertical from "../../Components/Menu-vertical/menu-vertical";

function Dashboard() {
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
    <div>
      <MenuVertical />
      <div className='dataSection'>
        <h2 className='dataSection__salutation'>
          Bonjour <span>{user?.userInfos?.firstName}</span>
        </h2>
      </div>
    </div>
  );
}

export default Dashboard;
