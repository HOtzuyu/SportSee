/**
 * All elements of charts
 */

import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchering } from "../../mocks/fetch";
import Host from "../../Components/Host/Host";
import MenuVertical from "../../Components/Menu-vertical/menu-vertical";
import UserInfo from "../../Components/UserInfo/UserInfo";
import Activity from "../../Components/recharts/Activity/Activity";
import Sessions from "../../Components/recharts/Session/Session";
import Performance from "../../Components/recharts/Performance/Performance";
import Score from "../../Components/recharts/Score/Score";
import MenuHorizontal from "../../Components/Menu-horizontal/menu-horizontal";
import calories from "../../assets/calories.svg";
import glucides from "../../assets/glucides.svg";
import lipides from "../../assets/lipides.svg";
import proteines from "../../assets/proteines.svg";

/**
 *@description all datavisualisations of the trainning performances of an user
 * @returns {JSX element} datavisualisation of all selected user datas
 */
function Dashboard() {
  const { id } = useParams();
  const [error, setError] = useState(false);
  const [user, setUser] = useState({});
  const [userActivity, setUserActivity] = useState({});
  const [userSessions, setUserSessions] = useState({});
  const [userPerformance, setUserPerformance] = useState({});

  /**
   * call all fetch _ if error, return error span
   * commuication with json
   */
  useEffect(() => {
    fetchering(
      id,
      setUser,
      setUserActivity,
      setUserPerformance,
      setUserSessions,
      setError,
    );
  }, [id]);
  if (error) {
    return <span>Oups il y a eu un problème</span>;
  }

  return (
    <div>
      <MenuHorizontal />
      <MenuVertical />
      <div className='dataSection'>
        <Host name={user?.userInfos?.firstName} />
        <div className='dataSection__chart'>
          <Activity data={userActivity?.sessions} />
          <div className='dataSection__chart--dis'>
            <Sessions data={userSessions?.sessions} />
            <Performance data={userPerformance?.data} />
            <Score dataScore={user?.score} dataTodayScore={user?.todayScore} />
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
