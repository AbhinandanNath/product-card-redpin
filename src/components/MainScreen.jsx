import React, { useState } from "react";
import Card from "./Card";

const cardList = [1, 2, 3, 4];

function MainScreen() {
  const [cardData] = useState([...cardList]);
  return (
    <div className="mainScreen">
      {cardData.map((item) => {
        return <Card key={item} data={item} />;
      })}
    </div>
  );
}

export default MainScreen;
