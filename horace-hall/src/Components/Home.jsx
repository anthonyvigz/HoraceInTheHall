import React, { useEffect, useState } from "react";
import "../Styling/home.scss";
// import { Parallax, Background } from "react-parallax";
import Aos from "aos";
import "aos/dist/aos.css";
import ModalVideo from "react-modal-video";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [isOpen, openModal] = useState(false);

  return (
    <div className="homeBanner">
      <div
        data-aos="fade-right"
        data-aos-duration="5000"
        data-aos-easing="ease-in-out"
        className="mainBanner"
      >
        <h1>Golden Era ballot.</h1>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui
        </p>
      </div>
      <img
        data-aos="fade-left"
        data-aos-duration="5000"
        data-aos-easing="ease-in-out"
        src="https://i.imgur.com/E9px3AA.png"
        width="425"
        alt="horaceandwillie"
      />
      <div className="footer">
        <ModalVideo
          channel="youtube"
          allowFullScreen={true}
          isOpen={isOpen}
          videoId="MHaRGo0KagE"
          onClose={() => openModal(false)}
        />
        <img
          onClick={() => openModal(true)}
          data-aos="fade-left"
          data-aos-duration="5000"
          data-aos-easing="ease-in-out"
          src="https://i.imgur.com/dxdkkuF.jpg"
          width="425"
          alt="youtubeimage"
        />
      </div>
    </div>
  );
}
