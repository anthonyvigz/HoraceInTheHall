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
      //   data-aos={props.fade}
      //   data-aos-duration="700"
      //   data-aos-easing="ease-in-out"
      className="imageCard"
    >
      <img
        src={props.image.img}
        width={props.image.width}
        style={{
          margin: props.image.margin,
          zIndex: props.image.z,
          top: props.image.top,
          left: props.image.left,
        }}
        alt={props.image.img}
      />
    </div>
  );
}
