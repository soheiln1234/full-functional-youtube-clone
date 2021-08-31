import "./_video.scss";

import { AiFillEye } from "react-icons/ai";

const Video = () => {
  return (
    <div className="video">
      <div className="video__top">
        <img
          src="https://i.ytimg.com/vi/eb9CE06-Zos/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD6IVEnNAv1WtkporAZuG-Nh-7euA"
          alt="thumpbnail"
        />
        <span>08:04</span>
      </div>
      <div className="video__title">
        چالش فان با خواهرم و ایوی 🤣 با جایزه مالی
      </div>
      <div className="video__details">
        <span>
          <AiFillEye /> 29,582 Views •
        </span>
        <span>Aug 31, 2021</span>
      </div>
      <div className="video__channel">
        <img
          src="https://yt3.ggpht.com/ytc/AKedOLQ2tTguKlHnRTsAURkcgs7LoNIcJHNdJhDT9jbtnw=s68-c-k-c0x00ffffff-no-rj"
          alt="channel"
        />
        <p>Amir Tavassoly</p>
      </div>
    </div>
  );
};

export default Video;
