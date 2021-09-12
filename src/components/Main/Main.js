import React, { useState } from "react";
import "./Main.css";
import { BiArrowBack } from "react-icons/bi";
import { CgCalendarDates, CgMoreAlt } from "react-icons/cg";
import Tweet from "../Tweets/Tweet";

const Main = () => {
  const [follow, setFollow] = useState(true);

  const FollowHandler = () => {
    if (follow === true) {
      setFollow(false);
    } else if (follow === false) {
      setFollow(true);
    }
  };

  return (
    <div id="Main">
      <div id="back-box-icon">
        <div id="box-user-name-back">
          <BiArrowBack id="back" />
          <div>
            <h1 id="matin">matinturkaman</h1>
            <p id="Tweets">22 Tweets</p>
          </div>
        </div>
      </div>
      <div id="header">
        <div id="user-img-box">
          <img
            id="user-img-g"
            src="https://avatars.githubusercontent.com/u/79017406?v=4"
            alt="avatar"
          />
        </div>
      </div>

      <div id="follow-box">
        <CgMoreAlt id="more" />
        <input
          type="button"
          value={follow ? "Follow" : "Following"}
          onClick={FollowHandler}
          className={follow === false ? "Following" : "Follow"}
        />
      </div>

      <div id="user-box">
        <h1 id="name-user">matinturkaman</h1>
        <p id="user-name-e">@matinturkaman</p>
        <p>👨‍💻 frontend</p>
        <div id="dateBox">
          <CgCalendarDates />
          <p id="date">Joined May 2021</p>
        </div>
        <div id="following-followers">
          <span id="bold">35</span>
          <p id="following">Following</p>
          <span id="bold">{follow === false ? 6 : 5}</span>
          <p id="followers">Followers</p>
        </div>
      </div>

      <div id="TweetsBox">
        <div id="boxs">
          <button id="tweets">Tweets</button>
          <div id="blue"></div>
        </div>
        <button id="btn">Tweets & replies</button>
        <button id="btn">Media</button>
        <button id="btn">Likes</button>
      </div>

      <Tweet comment="51" like="120" tweet="😎 بسیار باگ تا پخته خامی " />
      <Tweet comment="210" like="403" tweet="React js یادگیری" />
      <Tweet comment="105" like="220" tweet="روبه بالا 💻" />
      <Tweet comment="654" like="825" tweet="فقط انجامش بده🧨" />
      <Tweet comment="453" like="504" tweet="هرچیزی تلاش میخواد" />
    </div>
  );
};

export default Main;
