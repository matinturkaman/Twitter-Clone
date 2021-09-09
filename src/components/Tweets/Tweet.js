import React, { useState } from "react";
import { BiDownload } from "react-icons/bi";
import { CgMoreAlt } from "react-icons/cg";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { SiGoogleanalytics } from "react-icons/si";

const Tweet = (props) => {
  const [like, setLike] = useState(false);

  const likeHandler = () => {
    if (like === false) {
      setLike(true);
    } else if (like === true) {
      setLike(false);
    }
  };

  return (
    <div>
      <div id="profile-user">
        <div id="profile-box">
          <div id="profile_"></div>
        </div>
        <div id="post-box">
          <div id="all">
            <div id="names">
              <h1>matinturkaman</h1>
              <h1 id="name-user-r">@matinturkaman</h1>
              <h1 id="name-user-r">. Aug 10</h1>
            </div>
            <CgMoreAlt id="more-e" />
          </div>

          <div id="tweet-user">
            <p>{props.tweet}</p>
          </div>

          <div id="nav-icons-box">
            <div id="nav-icons">
              <div id="comment-tweet-box">
                <span id="blue-hover" className="hover">
                  <FaRegComment />
                </span>
                <p id="comment-tweet">{props.comment}</p>
              </div>
              <span id="retweet" className="hover">
                <AiOutlineRetweet />
              </span>
              <div id="liked-box">
                <span
                  onClick={likeHandler}
                  id={like === false ? "heart" : "liked"}
                  className="hover"
                >
                  {like === false ? <AiOutlineHeart /> : <AiFillHeart />}
                </span>
                <p id={like === false ? "like-text" : "liked-text"}>
                  {like === true ? parseInt(props.like) + 1 : props.like}
                </p>
              </div>
              <span className="hover" id="blue-hover">
                <BiDownload />
              </span>
              <span className="hover" id="blue-hover">
                <SiGoogleanalytics />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
