import { useState } from "react";
import { useDispatch } from "react-redux";
import "./_categoriesbar.scss";
import {
  getPopulerVideos,
  getVideosByCategory,
} from "../../redux/actions/videos.action";

const CategoriesBar = () => {
  const keywords = [
    "All",
    "Reaxt js",
    "Angular js",
    "React Native",
    "use of API",
    "Redux",
    "Music",
    "Algorithm Art",
    "Guitar",
    "Bengali Songs",
    "Coding",
    "Cricket",
    "Football",
    "Real Madrid",
    "Gtasby",
    "Poor Coder",
  ];

  const [activeElement, setActiveElement] = useState("All");

  const dispatch = useDispatch();

  const handleClick = (value) => {
    setActiveElement(value);
    if (value === "All") {
      dispatch(getPopulerVideos("All"));
    } else {
      dispatch(getVideosByCategory(value));
    }
  };

  return (
    <div className="categoriesBar">
      {keywords.map((value, i) => (
        <span
          className={activeElement === value ? "active" : ""}
          onClick={() => handleClick(value)}
          key={i}
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export default CategoriesBar;
