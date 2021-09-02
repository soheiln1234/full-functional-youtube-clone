import React from "react";

function YouTube(props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <svg
        width={50}
        height={50}
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g clipPath="url(#prefix__clip0)">
          <path
            d="M501.451 133.094c-5.902-21.933-23.195-39.222-45.125-45.128C416.26 77 255.995 77 255.995 77S95.734 77 55.668 87.548c-21.508 5.902-39.223 23.617-45.125 45.546C0 173.157 0 256.242 0 256.242s0 83.504 10.543 123.148c5.906 21.93 23.195 39.223 45.129 45.129 40.484 10.965 200.327 10.965 200.327 10.965s160.261 0 200.327-10.547c21.934-5.903 39.223-23.195 45.129-45.125 10.543-40.066 10.543-123.148 10.543-123.148s.422-83.507-10.547-123.57z"
            fill="red"
          />
          <path
            d="M204.968 333l133.269-76.757-133.269-76.758V333z"
            fill="#fff"
          />
        </g>
        <defs>
          <clipPath id="prefix__clip0">
            <path fill="#fff" d="M0 0h512v512H0z" />
          </clipPath>
        </defs>
      </svg>
      <p
        style={{
          fontSize: "1.4rem",
          marginTop: "15px",
          marginLeft: "5px",
          letterSpacing: "-1.5px",
          color: "#fff",
          fontWeight: "500",
        }}
      >
        YouTube
      </p>
    </div>
  );
}

export default YouTube;
