import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Styling/footer.scss";
import ModalVideo from "react-modal-video";
import "../Styling/modal-video.scss";

export default function Footer() {
  const [isOpen, openModal] = useState(false);

  return (
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
        src="https://i.imgur.com/dxdkkuF.jpg"
        width="285"
        alt="youtubeimage"
      />
    </div>
  );
}
