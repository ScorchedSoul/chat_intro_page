import React from "react";
import videoBg from "../assets/video/The Lines - 46765.mp4";
import "./Video.css";
import "../styles/main.scss";
import Typical from 'react-typical';

const Video = () => {
  return (

    <div className="main_body">
          <div className="video_bg">
      <video src={videoBg} autoPlay loop muted></video>

      {/* BUTTONS SECTION */}

      <div className="button_container">
      <div class="button-container-1">
        <span class="mas">MASK1</span>
        <button id="work" type="button" name="Hover">
          MASK1
        </button>
      </div>

      <div class="button-container-2">
        <span class="mas">MASK2</span>
        <button type="button" name="Hover">
          MASK2
        </button>
      </div>

      <div class="button-container-3">
        <span class="mas">MASK3</span>
        <button type="button" name="Hover">
          MASK3
        </button>
      </div>
      </div>


      {/* MADE WITH LOVE SECTION */}

      <div className="made_with_love">


      <div className="made"><h2>Made with</h2></div>
      <div class="heart"></div>
      <div className="by"><h2>by &nbsp; </h2></div>
      
        <p className="name">
        <Typical
          loop={Infinity}
          wrapper="c"
          steps={[
            'MRIGESH THAKUR',
            1000,
            'PALAK RAJ',
            1000,
            'RISHAB PAL',
            1000,
            'CHANDAN KUMAR',
            1000,
            'AMAN ASRANI',
            1000,
            'CHAITANYA BHOPAL',
            1000,
            'ARMAAN SHUKLA',
            1000,
          ]}
          />
        </p>

      </div>

      </div>

    </div>
  );
};

export default Video;
