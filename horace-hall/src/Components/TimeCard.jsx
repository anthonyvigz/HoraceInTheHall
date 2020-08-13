import React, { useEffect } from "react";
import "../Styling/timeline.scss";
import Aos from "aos";
import "aos/dist/aos.css";

export default function TimeCard(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      data-aos={props.fade}
      data-aos-duration="700"
      data-aos-easing="ease-in-out"
      className="timeCard"
      style={{
        margin: props.info.margin,
        zIndex: props.info.z,
      }}
    >
      <h1 className="year">{props.info.year}</h1>
      <h2 className="title">{props.info.title}</h2>
      <p className="summary">{props.info.summary}</p>
    </div>
  );
}
