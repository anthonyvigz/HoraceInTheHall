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
    >
      {props.info.year}
    </div>
  );
}
