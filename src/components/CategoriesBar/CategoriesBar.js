import { useState } from "react";
import "./_categoriesbar.scss";

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

  const handleClick = (value) => {
    setActiveElement(value);
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
