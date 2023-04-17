import React from "react";
import "./About.css";
import "bootstrap/dist/css/bootstrap-reboot.min.css"
import "bootstrap/dist/css/bootstrap-grid.min.css"

export const About = () => {
    return(
        <div className={"container"}>
            <div className={"wrapper_section_about_img_right row"}>
                <div className={"wrapper_text_section_about col"}>
                    <h2>Philosophy</h2>
                    <p>Annie Lin’s coaching philosophy was inspired by Michelangelo’s reference to his sculpting approach: “I saw the angel in the marble and carved until I set him free.” Annie perceives her clients’ unique brilliance; she challenges and encourages them to rise above their self-imposed limitations.</p>
                    <p>In an effort to help clients make a step change in life, Annie has drawn on the wisdom of both Eastern and Western philosophy. She created a method that relies on all the four Aspects of Being – physical, emotional, cognitive, and spiritual. Clients benefit from a process of self-discovery, facilitated by strategies that leverage the unique connections between each of those four Aspects.</p>
                    <p>Each individual has different aspirations and faces different challenges. Some clients require more structure, some seek more guidance, and some simply need more accountability. A key focus of Annie’s work is to adapt her approach to each individual.</p>
                    <p>Annie provides an oasis for busy New Yorkers and world citizens to pause, to reflect, and tune in to their own greatness, so that they can regroup for their next leap forward.</p>
                </div>
                <div className={"wrapper_img1 col"}>
                    <img src={require("./about_img/img1.png")} alt=""/>
                </div>
            </div>
            <div className={"wrapper_section_about_img_left row"}>
                <div className={"wrapper_img2 col"}>
                    <img src={require("./about_img/img2.png")} alt=""/>
                </div>
                <div className={"wrapper_text_section_about col"}>
                    <h2>Clients</h2>
                    <p>Annie has spent over 10,000 hours coaching clients from around the world, helping them live happier and more meaningful life, both personally and professionally. Clients hail from various walks of life – entrepreneurs, creative professionals, corporate employees, attorneys – and all ages, from 20-something to 75 years old.</p>
                    <p>Many of her clients are introverted individuals in quest of fulfilling relationships and careers. Annie specializes in guiding them to achieve results in a most authentic way.</p>
                </div>
            </div>
        </div>
    );
}