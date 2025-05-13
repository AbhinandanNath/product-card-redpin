/* eslint-disable no-unused-vars */

import { useState } from "react";

const tabData = [
  {
    name: "HTML",
    content:
      " The HyperText Markup Language or HTML is the standard markup language for documents designed tobe displayed in a web browser.",
  },
  {
    name: "CSS",
    content:
      " Cascading Style Sheets is a style sheet languageused for describing the presentation of a documentwritten in a markup language such as HTML or XML.",
  },
  {
    name: "JavaScript",
    content:
      "JavaScript, often abbreviated as JS, is aprogramming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
  },
];

export default function AccordianPanel() {
  const [activeTab, setActiveTab] = useState("");

  function onTabChange(selectedTabName) {
    setActiveTab((prevTab) =>
      prevTab === selectedTabName ? "" : selectedTabName
    );
  }
  return (
    <>
      <div className="rowContainer">
        {tabData.map((item, index) => {
          const isTabActive = activeTab == item.name;
          return (
            <div onClick={() => onTabChange(item.name)} key={item.name}>
              <div className="rowHeader">
                {item.name}
                <span
                  className={
                    isTabActive
                      ? "accordion-icon accordion-icon--rotated"
                      : "accordion-icon"
                  }
                />
              </div>
              {isTabActive ? <span>{item.content}</span> : ""}
            </div>
          );
        })}
      </div>
    </>
  );
}
