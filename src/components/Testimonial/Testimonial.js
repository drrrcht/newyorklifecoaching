import React from "react";
import "./css/Testimonial.css";

export const Testimonial = ({ name, text }) => {
  return (
    <div className={"wrapper_testimonial container"}>
      <div className={"wrapper_main_section"}>
        <div className={"main_text_testimonial"}>
          <p>{text}</p>
        </div>
        <div className={"wrapper_name"}>
          <span className={"name"}>{name}</span>
          <div className={"rating_mini"}>
            <span className={"active"}></span>
            <span className={"active"}></span>
            <span className={"active"}></span>
            <span className={"active"}></span>
            <span className={"active"}></span>
          </div>
        </div>
      </div>
    </div>
  );
};
