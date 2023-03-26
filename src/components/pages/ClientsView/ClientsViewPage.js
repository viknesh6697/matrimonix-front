import React, { useState, useEffect } from "react";
import "./ClientsViewPage.css";
import SocialCard from "./SocialCard";
import BackgroundImage from '../../../assets/images/coffee_paper_bg.jpg';

function PeopleList() {
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch("https://randomuser.me/api/?results=20&nat=in");
        userData = await response.json();
      } catch (error) {
        console.log(error);
        userData = [];
      }
      setAllUsers(userData.results);
      setUsers(userData.results);
    })();
  }, []);

  const filterCards = event => {
    const value = event.target.value.toLowerCase();
    const filteredUsers = allUsers.filter(user => (`${user.name.first} ${user.name.last}`.toLowerCase().includes(value)));
    setUsers(filteredUsers);
  }

  return (
    <div className="clients-view" style={{background: `url(${BackgroundImage})`}}>
      <h1>Client Cards</h1>
      <input className="search-box" onInput={filterCards} placeholder="Search..."/>
      <div className="cards-container">

      {users.map((user, index) => (
        <SocialCard key={index} userData={user} />
        ))}
      </div>
    </div>
  );
}

export default PeopleList;

