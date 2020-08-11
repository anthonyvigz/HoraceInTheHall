import React, { useState, useEffect } from "react";
import "../Styling/timeline.scss";

export default function Home() {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <div className="timelineBlock">
      <div className="leftLine"></div>
      <div style={{ height: scrollTop - 150 }} className="theLine"></div>
      <div className="rightLine"></div>
    </div>
  );
}
