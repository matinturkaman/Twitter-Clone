import React, { useState } from "react";
import { GoVerified } from "react-icons/go";

const Chanel = (props) => {
  const [follow, setFollow] = useState(true);
  const [verified, setVerified] = useState(true);

  const FollowHandler = () => {
    if (follow === true) {
      setFollow(false);
    } else if (follow === false) {
      setFollow(true);
    }
  };

  return (
    <div>
      <div id="profile-box-container">
        <div id="profile-box-chanel">
          <img src={props.src} id="profile-chanel" alt={props.name} />
          <div id="names-user">
            <div id="very">
              <h1 id="users-names">{props.name}</h1>
              {verified === props.verified && <GoVerified id="verified" />}
            </div>
            <p id="user-name-is">{props.userName}</p>
          </div>
        </div>
        <div id="button-follow-box">
          <input
            value={follow ? "Follow" : "Following"}
            type="button"
            onClick={FollowHandler}
            id={follow === false ? "Following" : "Follow_"}
          />
        </div>
      </div>
    </div>
  );
};

export default Chanel;
