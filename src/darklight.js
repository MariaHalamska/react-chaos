import React from "react";
import Lottie from "react-lottie";
import animationData from "./assets/DakrLight.json";

const darklightBTN = document.getElementById("darklight");

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
      <div id="darklight" class="button">
        <Lottie options={defayultOptions} />
      </div>
    );
  }
}
darklightBTN.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
//cd react-chaos
//npm start
