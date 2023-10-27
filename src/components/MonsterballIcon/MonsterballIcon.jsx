import "./MonsterballIcon.css";

const MonsterballIcon = () => {
  return (
    <div className="monsterballIcon">
      <svg
        height="30"
        style={{
          shapeRendering: "geometricPrecision",
          textRendering: "geometricPrecision",
          imageRendering: "optimizeQuality",
          fillRule: "evenodd",
          clipRule: "evenodd",
        }}
        version="1.1"
        viewBox="0 0 340 340"
        width="30"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <style type="text/css">
            {`
              .fil1 {fill:#FEFEFE}
              .fil5 {fill:#DCDDDD}
              .fil0 {fill:#C9CACA}
              .fil3 {fill:#332C2B}
              .fil2 {fill:#E62129}
              .fil4 {fill:#FEFEFE;fill-opacity:0.501961}
            `}
          </style>
        </defs>
        <g id="Layer_x0020_1">
          <circle className="fil0" cx="170" cy="170" r="170" />
          <path
            className="fil1"
            d="M330 170c0,89 -71,160 -160,160 -89,0 -161,-71 -161,-160l321 0z"
          />
          <path
            className="fil2"
            d="M170 9c89,0 160,72 160,161l-321 0c0,-89 72,-161 161,-161z"
          />
          <path
            className="fil3"
            d="M330 157c0,4 0,8 0,13 0,3 0,7 0,10l-321 0c0,-3 0,-7 0,-10 0,-5 0,-9 1,-13l320 0z"
          />
          <circle className="fil3" cx="170" cy="170" r="54" />
          <circle className="fil1" cx="170" cy="170" r="35" />
          <path
            className="fil4"
            d="M26 132c0,0 3,-55 66,-95 64,-40 61,-6 46,7 -11,9 -84,9 -112,88z"
          />
          <path
            className="fil5"
            d="M56 272c34,42 179,44 265,-74 -44,169 -228,134 -265,74z"
          />
        </g>
      </svg>
    </div>
  );
};

export default MonsterballIcon;
