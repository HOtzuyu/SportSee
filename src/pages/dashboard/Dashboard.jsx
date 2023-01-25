import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getUser } from "../../mocks/data";

import Host from "../../Components/Host/Host";
import MenuVertical from "../../Components/Menu-vertical/menu-vertical";
import UserInfo from "../../Components/UserInfo/UserInfo";
import Activity from "../../Components/Activity/Activity";
import Sessions from "../../Components/Session/Session";
import Performance from "../../Components/Performance/Performance";
import Score from "../../Components/Score/Score";
import MenuHorizontal from "../../Components/Menu-horizontal/menu-horizontal";

import calories from "../../assets/calories.svg";
import glucides from "../../assets/glucides.svg";
import lipides from "../../assets/lipides.svg";
import proteines from "../../assets/proteines.svg";

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
      <MenuHorizontal />
      <MenuVertical />
      <div className='dataSection'>
        <Host />
        <div className='dataSection__chart'>
          <Activity />
          <div className='dataSection__chart--dis'>
            <Sessions />
            <Performance />
            <Score />
          </div>
          <div className='dataSection__chart--userInfo'>
            <UserInfo
              name='Calories'
              value={user?.keyData?.calorieCount}
              measure='kCal'
              svg={calories}
              extraClass='calories'
            />
            <UserInfo
              name='Proteines'
              value={user?.keyData?.proteinCount}
              measure='g'
              svg={proteines}
              extraClass='proteines'
            />
            <UserInfo
              name='Glucides'
              value={user?.keyData?.carbohydrateCount}
              measure='g'
              svg={glucides}
              extraClass='glucides'
            />
            <UserInfo
              name='Lipides'
              value={user?.keyData?.lipidCount}
              measure='g'
              svg={lipides}
              extraClass='lipides'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
