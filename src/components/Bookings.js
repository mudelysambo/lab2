import React from "react";
import SearchResults from "./SearchResults";
import TouristInfoCard from "./TouristInfoCard";
import Search from "./Search";
import UserInfo from "./UserInfo";

function Bookings() {
  return (
    <div>
      <Search />
      <SearchResults />

      <UserInfo
        link="https://i0.wp.com/www.sa-venues.com/attractionsmpl/images/nelspruit.jpg"
        name="Nelspruit"
      />

      <TouristInfoCard
        Title="mrs"
        Surname="person1"
        Email="person1@else.com"
        RoomId="1"
        CheckInDate="2017-11-27"
        CheckUotDate="2017-11-28"
      />
    </div>
  );
}
export default Bookings;
