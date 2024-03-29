import React from "react";
 import Rate from "../Rate";
import "./Header.css";


const Header = ({ setMyInput, setMyRate, myRate }) => {
  return (
    <div>
      {/* <h3 className="search">Search movie by name or rate</h3> */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Type movie name to search"
          onChange={(e) => setMyInput(e.target.value)}
        />

      
       <Rate rating={myRate} setMyRate={setMyRate} /> 
      </div>
    </div>
  );
};

export default Header;
