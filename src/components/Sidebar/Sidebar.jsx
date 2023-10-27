// import React from "react";
import "./Sidebar.css";
import PropTypes from "prop-types";

function Sidebar({ handlePageJump }) {
  return (
    <div className="sidebar">
      <div className="sidebar-no">
        <h3>図鑑No</h3>
      </div>
      <ul>
        <li>
          <button
            className="pageJumpBtn"
            onClick={() => handlePageJump(0, 100)}
          >
            No.1 ~ 100
          </button>
        </li>
        <li>
          <button
            className="pageJumpBtn"
            onClick={() => handlePageJump(100, 100)}
          >
            No.101 ~ 200
          </button>
        </li>
        <li>
          <button
            className="pageJumpBtn"
            onClick={() => handlePageJump(200, 100)}
          >
            No.201 ~ 300
          </button>
        </li>
        <li>
          <button
            className="pageJumpBtn"
            onClick={() => handlePageJump(300, 100)}
          >
            No.301 ~ 400
          </button>
        </li>
        <li>
          <button
            className="pageJumpBtn"
            onClick={() => handlePageJump(400, 100)}
          >
            No.401 ~ 500
          </button>
        </li>
        <li>
          <button
            className="pageJumpBtn"
            onClick={() => handlePageJump(500, 100)}
          >
            No.501 ~ 600
          </button>
        </li>
        <li>
          <button
            className="pageJumpBtn"
            onClick={() => handlePageJump(600, 100)}
          >
            No.601 ~ 700
          </button>
        </li>
        <li>
          <button
            className="pageJumpBtn"
            onClick={() => handlePageJump(700, 100)}
          >
            No.701 ~ 800
          </button>
        </li>
        <li>
          <button
            className="pageJumpBtn"
            onClick={() => handlePageJump(800, 100)}
          >
            No.801 ~ 900
          </button>
        </li>
        <li>
          <button
            className="pageJumpBtn"
            onClick={() => handlePageJump(900, 100)}
          >
            No.901 ~ 1000
          </button>
        </li>
        <li>
          <button
            className="pageJumpBtn"
            onClick={() => handlePageJump(1000, 10)}
          >
            No.1001 ~ 1010
          </button>
        </li>
      </ul>
    </div>
  );
}

Sidebar.propTypes = {
  handlePageJump: PropTypes.func,
};

export default Sidebar;
