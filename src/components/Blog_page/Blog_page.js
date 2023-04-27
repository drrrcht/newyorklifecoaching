import React from "react";
import "./css/Blog_page.css";

export const Blog_page = () => {
    return (
        <div className={"wrapper__blog-page"}>
        <div className={"container wrapper_main_text__blog-page"}>
            <div className={"header_main_text__blog-page"}>
                “It just hasn’t happened for me.”
            </div>
            <div className={"main_text__blog-page"}>
                <p>Is there anything wrong with this sentence? And if so, what is it? Let us examine how we structure our thoughts concerning our own role. It is possible to analyze such thoughts because of their verbal emanation.</p>
                <p>The commonly repeated phraseology may be something calqued from other people’s discourses. Still, if resurfacing often enough, they become part of the speaker’s self-image and reflect a deeply-held belief. In other words, such statements are not merely a fleeting surface phenomenon but a mirror of the inner monologue.</p>
                <img src={require("./img/img_1.png")} alt="img"/>
                <img src={require("./img/img_2.png")} alt="img"/>
            </div>
        </div>
            </div>
    );
}