import { useState, useEffect } from "react";
const lightBoxMap = [
  { color: "red", duration: 4000 },
  { color: "yellow", duration: 2000 },
  { color: "green", duration: 3000 },
];
export default function JobBoard() {
  const [currentLighIndex, setCurrentLightIndex] = useState(0);

  useEffect(() => {
    let nextLight = (currentLighIndex + 1) % lightBoxMap.length;

    let lightDuration = lightBoxMap[nextLight].duration;
    console.log(lightDuration);
    setTimeout(() => {
      setCurrentLightIndex(prevState => prevState+1)
    },lightDuration);
  },[currentLighIndex]);

  return (
    <div id="trafficLightContainer">
      {lightBoxMap.map((item, index) => {
        return <div key={item} className={`defaultBox ${index == currentLighIndex ? item.color : ""}`}></div>;
      })}
    </div>
  );
}
