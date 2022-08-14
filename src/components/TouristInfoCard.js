import React from "react";
import "./UserInfo.css";

function TouristInfoCard(props) {
  return (
    <div className="card">
      <div className="body">
      

        <div className="heading">
          <p>{props.Title}</p>
          <p>{props.Surname}</p>
          <p>{props.Email}</p>
          <p>{props.RoomId}</p>
          <p>{props.CheckInDate}</p>
          <p>{props.CheckUotDate}</p>


        </div>
      </div>
    </div>
  );
}
export default TouristInfoCard;