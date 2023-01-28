/**
 * JSX for settingPage (réglage)
 */

import UnderConstruction from "../../Components/UnderConstruction/UnderConstruction";
import MenuHorizontal from "../../Components/nav/Menu-horizontal/menu-horizontal";

/**
 *
 * @returns {JSX} displaying the page underconstruction
 */
function Setting() {
  return (
    <div>
      <MenuHorizontal />
      <UnderConstruction />
    </div>
  );
}

export default Setting;
