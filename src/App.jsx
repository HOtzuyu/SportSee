import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "../src/utils/css/style.css";

import MenuHorizontal from "./Components/Menu-horizontal/menu-horizontal";
import Profil from "./pages/profil/Profil";

import Dashboard from "./pages/dashboard/Dashboard";
import Setting from "./pages/setting/Setting";
import Community from "./pages/community/Community";

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <MenuHorizontal />
        <Routes>
          <Route path='/' element={<Profil />} />
          <Route path='/user/:id' element={<Dashboard />} />
          <Route path='/setting' element={<Setting />} />
          <Route path='/community' element={<Community />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
};

export default App;
