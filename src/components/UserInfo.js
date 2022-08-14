import React from "react";
import "./UserInfo.css";

function UserInfo(props) {
  return (
    <div className="card">
      <div className="body">
        <img src={props.link} alt="img" />

        <div className="heading">
          <p>{props.name}</p>
        </div>
      </div>
    </div>
  );
}
export default UserInfo;
