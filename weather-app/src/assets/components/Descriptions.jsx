import React from "react";
import "./description.css";
import { FaArrowDown } from "react-icons/fa";

function Descriptions() {
  return (
    <div className="sectionDescriptions">
      <div className="card">
        <div className="descriptionCardIcon">
          <FaArrowDown />
          <small> min</small>
        </div>
        <h2>32 C</h2>
      </div>

      <div className="card">
        <div className="descriptionCardIcon">
          <FaArrowDown />
          <small> min</small>
        </div>
        <h2>32 C</h2>
      </div>

      <div className="card">
        <div className="descriptionCardIcon">
          <FaArrowDown />
          <small> min</small>
        </div>
        <h2>32 C</h2>
      </div>

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
