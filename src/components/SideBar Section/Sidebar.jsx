import React from "react";
import "./sidebar.css";
import logo from "../../Asset/logo.png";
import { IoMdSpeedometer } from "react-icons/io";
import { AiOutlinePieChart } from "react-icons/ai";
import {
  MdDeliveryDining,
  MdOutlineExplore,
  MdOutlinePermContactCalendar,
} from "react-icons/md";
import { BsTrophy, BsCreditCard2Front, BsQuestion } from "react-icons/bs";
import { BiTrendingUp } from "react-icons/bi";

// Import Icons =================>

const Sidebar = () => {
  return (
    <div className="sideBar grid">
      <div className="logoDiv flex">
        <img src={logo} alt="Imge Name" />
        <h2>Planti.</h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">QUICK MENU</h3>

        <ul className="menuLists grid">
          <li className="listItem active">
            <a href="/" className="menuLink flex">
              <IoMdSpeedometer className="icon" />
              <span className="smallText">Dash Board</span>
            </a>
          </li>
          <li className="listItem ">
            <a href="/" className="menuLink flex">
              <MdDeliveryDining className="icon" />
              <span className="smallText">My Order</span>
            </a>
          </li>
          <li className="listItem">
            <a href="/" className="menuLink flex">
              <MdOutlineExplore className="icon" />
              <span className="smallText">Explorer</span>
            </a>
          </li>
          <li className="listItem">
            <a href="/" className="menuLink flex">
              <BsTrophy className="icon" />
              <span className="smallText">Products</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="settingDiv">
        <h3 className="divTitle">SETTING</h3>

        <ul className="menuLists grid">
          <li className="listItem">
            <a href="/" className="menuLink flex">
              <AiOutlinePieChart className="icon" />
              <span className="smallText">Charts</span>
            </a>
          </li>
          <li className="listItem">
            <a href="/" className="menuLink flex">
              <BiTrendingUp className="icon" />
              <span className="smallText">Trending</span>
            </a>
          </li>
          <li className="listItem">
            <a href="/" className="menuLink flex">
              <MdOutlinePermContactCalendar className="icon" />
              <span className="smallText">Content</span>
            </a>
          </li>
          <li className="listItem">
            <a href="/" className="menuLink flex">
              <BsCreditCard2Front className="icon" />
              <span className="smallText">Billing</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="sideBarCard">
        <div className="circle">
          <b></b>
          <b></b>
          <BsQuestion className="icon"></BsQuestion>
        </div>
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <h3>Help Center</h3>
          <p>
            Having a Problem ! Just Call with Us Expert Call you To Soon !:)
          </p>
          <button className="btn">GO To the Help </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
