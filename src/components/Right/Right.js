import React from "react";
import "./Right.css";
import { BiSearch } from "react-icons/bi";
import Chanel from "../chanels/chanel";
import { AiOutlineSetting } from "react-icons/ai";
import { CgMoreAlt } from "react-icons/cg";

const Right = () => {
  return (
    <div id="right">
      <div id="box-search">
        <input type="text" id="search" placeholder="Search Twitter" />
        <BiSearch id="search-icon" />
      </div>

      <div id="flex">
        <div id="picture-container">
          <div id="left-picture"></div>
          <div id="box-picture">
            <div id="right-pictureOne"></div>
            <div id="right-pictureTwo"></div>
          </div>
        </div>
      </div>

      <div id="might-box">
        <div id="might">
          <h1 id="might-like">You might like</h1>
          <Chanel
            name="ali turkaman"
            src="https://avatars.githubusercontent.com/u/79016171?v=4"
            userName="@ATurkaman"
          />
          <Chanel
            name="Github"
            src="data:image/png;base64,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"
            userName="@github"
            verified={true}
          />
          <Chanel
            name="React"
            src="https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png"
            userName="@Reactjs"
            verified={true}
          />
          <button id="show-more">Show more</button>
        </div>
      </div>

      <div id="trends-box">
        <div id="trends">
          <div id="row">
            <h1 id="header-text">Trends</h1>
            <AiOutlineSetting id="setting" />
          </div>
          <div id="tag-box">
            <p id="trending">1 . Trending</p>
            <h1 id="tag">#Reactjs</h1>
            <p id="tweets-tag">430.2k Tweets</p>
          </div>
          <div id="tag-box">
            <p id="trending">2 . Trending</p>
            <h1 id="tag">#programming</h1>
            <p id="tweets-tag">150.2k Tweets</p>
          </div>
          <div id="tag-box">
            <p id="trending">3 . Trending</p>
            <h1 id="tag">#frontend</h1>
            <p id="tweets-tag">130.2k Tweets</p>
          </div>
        </div>
      </div>

      <div id="footer">
        <a href="#" id="terms" onClick={(e) => e.preventDefault()}>
          Terms of Service
        </a>
        <a href="#" id="terms" onClick={(e) => e.preventDefault()}>
          Privacy policy
        </a>
        <a href="#" id="terms" onClick={(e) => e.preventDefault()}>
          Cookie Policy
        </a>
        <a href="#" id="terms" onClick={(e) => e.preventDefault()}>
          Imprint
        </a>
        <a href="#" id="terms" onClick={(e) => e.preventDefault()}>
          Ads info
        </a>
        <a href="#" id="terms" onClick={(e) => e.preventDefault()}>
          More ...
        </a>
        <a href="#" id="terms" onClick={(e) => e.preventDefault()}>
          2021 Twitter, inc.
        </a>
      </div>
    </div>
  );
};

export default Right;
