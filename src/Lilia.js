import React from "react";
import Lottie from "react-lottie";
import animationData from "./assets/Lilia_Light.json";

export default class LottieControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isStopped: false, isPaused: false };
  }

  render() {
    const defayultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <div id="lilia" class="button">
        <Lottie options={defayultOptions} />
      </div>
    );
  }
}

//cd react-chaos
//npm start
