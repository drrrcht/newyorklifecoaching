import React from "react";
import "../../App.css"

export const Block_about_first = () => {
    return (
        <div className={"wrapper_section_about_img_right row"}>
            <div className={"wrapper_text_section_about col"}>
                <h2 style={{marginTop: "80px"}}>Philosophy</h2>
                <p>Annie Lin’s coaching philosophy was inspired by Michelangelo’s reference to his sculpting approach: “I saw the angel in the marble and carved until I set him free.” Annie perceives her clients’ unique brilliance; she challenges and encourages them to rise above their self-imposed limitations.</p>
                <p>In an effort to help clients make a step change in life, Annie has drawn on the wisdom of both Eastern and Western philosophy. She created a method that relies on all the four Aspects of Being – physical, emotional, cognitive, and spiritual. Clients benefit from a process of self-discovery, facilitated by strategies that leverage the unique connections between each of those four Aspects.</p>
                <p>Each individual has different aspirations and faces different challenges. Some clients require more structure, some seek more guidance, and some simply need more accountability. A key focus of Annie’s work is to adapt her approach to each individual.</p>
                <p>Annie provides an oasis for busy New Yorkers and world citizens to pause, to reflect, and tune in to their own greatness, so that they can regroup for their next leap forward.</p>
            </div>
            <div className={"wrapper_img1-about col"}>
                <img src={require("../../pages/about_img/img1.png")} alt=""/>
            </div>
        </div>
    );
}