import React from "react";
import Menu from "../component/Menu";
import List from "../component/List";
import "../style/DashboardHome.css";

function DashboardHome() {
  return (
    <div className="dashboard__home">
      <Menu />
      <List />
    </div>
  );
}

export default DashboardHome;
