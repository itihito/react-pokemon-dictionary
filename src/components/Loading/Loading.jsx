import "./Loading.css";
import PropTypes from "prop-types";

function Loading() {
  return (
    <div id="sample09" className="loading">
      <svg width="200" height="200">
        <rect
          x="125"
          y="95"
          width="50"
          height="10"
          stroke="transparent"
          fill="black"
          transform="rotate(0,100,100)"
          className="load-blink-dot"
          style={{ animationDelay: "0.0s" }}
        >
          {" "}
        </rect>
        <rect
          x="125"
          y="95"
          width="50"
          height="10"
          stroke="transparent"
          fill="black"
          transform="rotate(30,100,100)"
          className="load-blink-dot"
          style={{ animationDelay: "0.1s" }}
        ></rect>
        <rect
          x="125"
          y="95"
          width="50"
          height="10"
          stroke="transparent"
          fill="black"
          transform="rotate(60,100,100)"
          className="load-blink-dot"
          style={{ animationDelay: "0.2s" }}
        ></rect>
        <rect
          x="125"
          y="95"
          width="50"
          height="10"
          stroke="transparent"
          fill="black"
          transform="rotate(90,100,100)"
          className="load-blink-dot"
          style={{ animationDelay: "0.3s" }}
        ></rect>
        <rect
          x="125"
          y="95"
          width="50"
          height="10"
          stroke="transparent"
          fill="black"
          transform="rotate(120,100,100)"
          className="load-blink-dot"
          style={{ animationDelay: "0.4s" }}
        ></rect>
        <rect
          x="125"
          y="95"
          width="50"
          height="10"
          stroke="transparent"
          fill="black"
          transform="rotate(150,100,100)"
          className="load-blink-dot"
          style={{ animationDelay: "0.5s" }}
        ></rect>
        <rect
          x="125"
          y="95"
          width="50"
          height="10"
          stroke="transparent"
          fill="black"
          transform="rotate(180,100,100)"
          className="load-blink-dot"
          style={{ animationDelay: "0.6s" }}
        ></rect>
        <rect
          x="125"
          y="95"
          width="50"
          height="10"
          stroke="transparent"
          fill="black"
          transform="rotate(210,100,100)"
          className="load-blink-dot"
          style={{ animationDelay: "0.7s" }}
        ></rect>
        <rect
          x="125"
          y="95"
          width="50"
          height="10"
          stroke="transparent"
          fill="black"
          transform="rotate(240,100,100)"
          className="load-blink-dot"
          style={{ animationDelay: "0.8s" }}
        ></rect>
        <rect
          x="125"
          y="95"
          width="50"
          height="10"
          stroke="transparent"
          fill="black"
          transform="rotate(270,100,100)"
          className="load-blink-dot"
          style={{ animationDelay: "0.9s" }}
        ></rect>
        <rect
          x="125"
          y="95"
          width="50"
          height="10"
          stroke="transparent"
          fill="black"
          transform="rotate(300,100,100)"
          className="load-blink-dot"
          style={{ animationDelay: "1.0s" }}
        ></rect>
        <rect
          x="125"
          y="95"
          width="50"
          height="10"
          stroke="transparent"
          fill="black"
          transform="rotate(330,100,100)"
          className="load-blink-dot"
          style={{ animationDelay: "1.1s" }}
        ></rect>
      </svg>
      <div className="load-text load-blink">Now Loading...</div>
    </div>
  );
}

Loading.propTypes = {
  inverted: PropTypes.bool,
};

export default Loading;
