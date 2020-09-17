import React, { useReducer, createContext, useContext, Consumer, useState } from 'react';
import '../App.css';
import logo from '../images/fiverr.png';
import user from '../images/user.png';

export default function NavTop() {

  return (
    <div  >
      <nav>
        <div className="left"><img src={logo} alt="logo" />
        </div>
        <div className="center">
          <ul>
            <li><a href="#contact">Dashboard</a></li>
            <li><a href="#news">Messages</a></li>
            <li><a href="#about">Orders</a></li>
            <li><a href="#home">Gigs</a></li>
            <li><a href="#news">Analytics</a></li>
            <li><a href="#contact">Earnings</a></li>
            <li><a href="#about">Community</a></li>
            <li><a href="#about">More</a></li>
          </ul>
        </div>
        <div className="right">
          <span style={{ font: 20, color: "#1dbf73", fontWeight: "bold" }}>Switch to Buying</span>
          <img src={user} alt="logo" />
          <span className="dollerIcon">$4</span>
        </div>
      </nav>
    </div>
  )

}
