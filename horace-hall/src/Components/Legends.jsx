import React from "react";
import "../Styling/legends.scss";

export default function Legends() {
  return (
    <div className="legends">
      <div className="titleBlock">
        <h1>Influenced by Horace...</h1>
        <h2>HALL OF FAMERS</h2>
      </div>
      <div className="legendBlock">
        <h1 className="yearName">'09-'19</h1>
        <div className="names">
          <h3>McGraw</h3>
          <h3>G.Kelly</h3>
          <h3>Roush</h3>
          <h3>Youngs</h3>
          <h3>Hoyt</h3>
          <h3>Frisch</h3>
        </div>
      </div>
      <div className="legendBlock">
        <h1 className="yearName">'20-'39</h1>
        <div className="names">
          <h3>Bancroft</h3>
          <h3>Stengel</h3>
          <h3>Jackson</h3>
          <h3>Terry</h3>
          <h3>Wilson</h3>
          <h3>Lindstrom</h3>
          <h3>Southworth</h3>
          <h3>Jennings</h3>
          <h3>Ott</h3>
          <h3>Hornsby</h3>
          <h3>Hubbell</h3>
          <h3>Schalk</h3>
          <h3>Lazzeri</h3>
        </div>
      </div>
      <div className="legendBlock">
        <h1 className="yearName">'40-'59</h1>
        <div className="names">
          <h3>Hartnett</h3>
          <h3>Mize</h3>
          <h3>Medwick</h3>
          <h3>Lombardi</h3>
          <h3>Durocher</h3>
          <h3>Irvin</h3>
          <h3>Mays</h3>
          <h3>Willhelm</h3>
          <h3>Schoendienst</h3>
          <h3>Cepeda</h3>
        </div>
      </div>
      <div className="legendBlock">
        <h1 className="yearName">'60-</h1>
        <div className="names">
          <h3>McCovey</h3>
          <h3>Johnson</h3>
          <h3>Marichal</h3>
          <h3>Perry</h3>
          <h3>Snider</h3>
          <h3>Spahn</h3>
        </div>
      </div>
      <img src="https://i.imgur.com/GPeZg8o.png" alt="hallLogo" />
    </div>
  );
}
