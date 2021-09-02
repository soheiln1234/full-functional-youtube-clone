import Lottie from "react-lottie";
import animationData from "./youtube.json";

const YouTube = (props) => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Lottie
      style={{ marginBottom: "1rem" }}
      width={150}
      options={defaultOptions}
    />
  );
};

export default YouTube;
