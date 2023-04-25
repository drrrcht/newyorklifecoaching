import React from "react";
import "../../App.css";

export const Block_about_second = () => {
    return (
        <div className={"wrapper_section_about_img_left row"}>
            <div className={"wrapper_img2 col"}>
                <img src={require("../../pages/about_img/img2.png")} alt=""/>
            </div>
            <div className={"wrapper_text_section_about col"}>
                <h2>Clients</h2>
                <p>Annie has spent over 10,000 hours coaching clients from around the world, helping them live happier and more meaningful life, both personally and professionally. Clients hail from various walks of life – entrepreneurs, creative professionals, corporate employees, attorneys – and all ages, from 20-something to 75 years old.</p>
                <p>Many of her clients are introverted individuals in quest of fulfilling relationships and careers. Annie specializes in guiding them to achieve results in a most authentic way.</p>
            </div>
        </div>
    );
}