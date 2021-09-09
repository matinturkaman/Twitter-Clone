import React from "react";
import "./NavBarLeft.css";
import { FaTwitter } from "react-icons/fa";
import {
  BiHash,
  BiHomeCircle,
  BiMessageSquareDetail,
  BiBookmark,
} from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiFileList2Line, RiContactsFill } from "react-icons/ri";
import { CgMoreO, CgMoreAlt } from "react-icons/cg";

const NavBarLeft = () => {
  return (
    <div id="Left">
      <div id="TwitterBox">
        <FaTwitter id="TwitterLogo" />
      </div>
      <button id="box">
        <BiHomeCircle id="icon" />
        <p>Home</p>
      </button>
      <button id="box">
        <BiHash id="icon" />
        <p>Explore</p>
      </button>
      <button id="box">
        <IoNotificationsOutline id="icon" />
        <p>notifications</p>
      </button>
      <button id="box">
        <BiMessageSquareDetail id="icon" />
        <p>Message</p>
      </button>
      <button id="box">
        <BiBookmark id="icon" />
        <p>Bookmarks</p>
      </button>
      <button id="box">
        <RiFileList2Line id="icon" />
        <p>Lists</p>
      </button>
      <button id="box">
        <RiContactsFill id="icon" />
        <p id="bold">Profile</p>
      </button>
      <button id="box">
        <CgMoreO id="icon" />
        <p>More</p>
      </button>

      <button id="Tweet">Tweet</button>
      <div id="user">
        <img
          src="https://avatars.githubusercontent.com/u/79017406?s=400&u=afd722bfaa6bde4417c495ac110a8971e77c9432&v=4"
          alt=""
          id="user-img"
        />
        <div>
          <p id="name">matinturkaman</p>
          <p id="user-name">@matinturkaman</p>
        </div>
        <CgMoreAlt id="cg" />
      </div>
    </div>
  );
};

export default NavBarLeft;
