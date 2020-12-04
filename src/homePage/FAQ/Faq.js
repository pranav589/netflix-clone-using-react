import React from "react";
import plus from "../../images/plus.png";
import arrow from "../../images/arrow.png";
import Subscribe from "../subscribe/Subscribe";
function Faq() {
  const ques = [
    "What is Netflix?",
    "How much does Netflix costs?",
    "Where can I watch?",
    "How do I cancel?",
    "What can I watch on Netflix?",
  ];

  return (
    <div>
      <div className="section-wrapper">
        <div className="section-center-wrapper" id="faq-wrapper">
          <h1>Frequently Asked Questions</h1>
          <div id="faq-wrapper-content">
            {ques.map((que) => (
              <div className="faq-element">
                <div className="faq-title">
                  <h1>{que}</h1>
                  <img className="plus-icon" src={plus} alt="" />
                </div>
              </div>
            ))}
          </div>
          <Subscribe id={"faq-form"} />
        </div>
      </div>

      <div className="spacer"></div>
    </div>
  );
}

export default Faq;
