/**
 * File for Routers
 */

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profil from "./pages/profil/Profil";
import Dashboard from "./pages/dashboard/Dashboard";
import Setting from "./pages/setting/Setting";
import Community from "./pages/community/Community";
import Error from "./Components/Error/error";
import "../src/utils/css/style.css";

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path='/' element={<Profil />} />
          <Route path='/user/:id' element={<Dashboard />} />
          <Route path='/setting' element={<Setting />} />
          <Route path='/community' element={<Community />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
};

export default App;
