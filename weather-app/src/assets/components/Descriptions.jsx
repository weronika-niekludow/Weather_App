import React from "react";
import { FaArrowDown } from "react-icons/Fa";

function Descriptions() {
  return (
    <div className="section descriptions">
      <div className="card">
        <div className="descriptionCardIcon">
          <FaArrowDown />
          <small> min</small>
        </div>
        <h2>32 C</h2>
      </div>
    </div>
  );
}

export default Descriptions;
