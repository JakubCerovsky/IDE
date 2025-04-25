import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import "./App.css";

export default function App() {
  const [modules, setModules] = useState({
    mod1: { selected: true, position: 0 },
    mod2: { selected: true, position: 0 },
    mod3: { selected: true, position: 0 },
    mod4: { selected: true, position: 0 },
  });

  const handleScroll = (direction) => {
    setModules((prev) => {
      const updated = { ...prev };
      for (const key in updated) {
        if (updated[key].selected) {
          const current = updated[key].position;
          if (direction === "up" && current > 0) {
            updated[key].position = current - 200;
          } else if (direction === "down" && current < 200) {
            updated[key].position = current + 200;
          }
        }
      }
      return updated;
    });
  };

  const handleSelection = (mod) => {
    setModules((prev) => ({
      ...prev,
      [mod]: {
        ...prev[mod],
        selected: !prev[mod].selected,
      },
    }));
  };

  return (
    <div className="App">
      <div className="container">
        <div className="modules">
          {Object.entries(modules).map(([key, { selected, position }]) => (
            <div
              key={key}
              onClick={() => handleSelection(key)}
              style={{
                transform: `translateY(${position}px)`,
                backgroundColor: selected ? "limegreen" : "green",
                cursor: "pointer",
              }}
              className="module"
            />
          ))}
        </div>
        <div className="arrows">
          <button onClick={() => handleScroll("up")}>
            <FaAngleUp />
          </button>
          <button onClick={() => handleScroll("down")}>
            <FaAngleDown />
          </button>
        </div>
      </div>
    </div>
  );
}
