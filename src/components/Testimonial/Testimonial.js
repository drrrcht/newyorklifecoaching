import React from "react";
import "./css/Testimonial.css"

export const Testimonial = () => {
    return (
        <div className={"wrapper_testimonial container"}>
            <div className={"wrapper_img"}>
                <img src={require("./img/img.png")} alt="" className={"testimonial_img"}/>
            </div>
            <div className={"wrapper_main_section"}>
                <div className={"main_text_testimonial"}>
                    <p>My decision to seek a life coach was initially triggered by lack of confidence in my new job. I was also worried about imminent, big changes in my personal life; I recently got married and wanted to start a family.Annie taught me how to think...</p>
                </div>
                <div className={"wrapper_name"}>
                    <span className={"name"}>Alanna D.</span>
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
}