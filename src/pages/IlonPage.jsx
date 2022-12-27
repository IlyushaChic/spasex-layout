import React from "react";
import Btn from "../components/Btn/Btn";
import ContentBlock from "../components/ContentBlock/ContentBlock";
import Header from "../components/Header/Header";
import "./template.css";
const IlonPage = () => {
  const content = [
    {
      firstLine: "мы",
      secondLine: "1",
      endLine: "на рынке",
    },
    {
      firstLine: "гарантируем",
      secondLine: "50%",
      endLine: "безопасность",
    },
    {
      firstLine: "календарик за",
      secondLine: "2001г.",
      endLine: "в подарок",
    },
    {
      firstLine: "путешествие",
      secondLine: "597",
      endLine: "дней",
    },
  ];

  return (
    <div className="ilonpage__container">
      <Header /> 
      <div className="ilonpage__body">
        <div className="ilonpage__body-left_info">
          <div className="ilonpage__body-left_info-header">
            Путешествие <br /> на другую планету
          </div>
          <div className="ilonpage__body-left_btn-container">
            <Btn>Начать путешествие</Btn>
            <div className="ilonpage__body-left_btn-line" />
          </div>
        </div>
        <div className="ilonpage__body-right_info">
          <div className="ilonpage__body-right_info-container">
            {content.map((elem) => (
              <ContentBlock
                firstLine={elem.firstLine}
                secondLine={elem.secondLine}
                endLine={elem.endLine}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IlonPage;
