import "./Sidebar.css";
import PropTypes from "prop-types";

function generatePageJumpButton(offset, limit, handlePageJump) {
  return (
    <li key={offset}>
      <button
        className="pageJumpBtn"
        onClick={() => handlePageJump(offset, limit)}
      >
        {`No.${offset + 1} ~ ${offset + limit}`}
      </button>
    </li>
  );
}

function Sidebar({ handlePageJump }) {
  const pageRanges = [
    { offset: 0, limit: 100 },
    { offset: 100, limit: 100 },
    { offset: 200, limit: 100 },
    { offset: 300, limit: 100 },
    { offset: 400, limit: 100 },
    { offset: 500, limit: 100 },
    { offset: 600, limit: 100 },
    { offset: 700, limit: 100 },
    { offset: 800, limit: 100 },
    { offset: 900, limit: 100 },
    { offset: 1000, limit: 10 },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-no">
        <h3>図鑑No</h3>
      </div>
      <ul>
        {pageRanges.map(({ offset, limit }) =>
          generatePageJumpButton(offset, limit, handlePageJump)
        )}
      </ul>
    </div>
  );
}

Sidebar.propTypes = {
  handlePageJump: PropTypes.func,
};

export default Sidebar;
