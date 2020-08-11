import React from "react";
import "../Styling/home.scss";

export default function Home() {
  return (
    <div className="homeBanner">
      <div className="mainBanner">
        <h1>Golden Era ballot.</h1>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui
        </p>
      </div>
      <img
        src="https://i.imgur.com/E9px3AA.png"
        width="450"
        alt="horaceandwillie"
      />
    </div>
  );
}
