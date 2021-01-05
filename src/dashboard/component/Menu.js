import React from "react";
import "../style/Menu.css";
import logo from "../assets/LOGO.png";
import MenuList from "../component/MenuList";
import imgManager from "../assets/Oval2-01.png";

function Menu() {
  return (
    <div className="menu__dashboard">
      <div className="menu__dashboard__top">
        <img src={logo}></img>
      </div>
      <div className="menu__dashboard__bottom">
        <MenuList />
      </div>
      <div className="menu__dashboard__end">
        <div className="menu__dashboard__end__left">
          <img src={imgManager} />
        </div>
        <div className="menu__dashboard__end__right">
          <h4>Francisco M.</h4>
          <p>Support manager</p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
