import React from "react";
import Upper_red_line from "../components/Upper_red_line/Upper_red_line";
import {Reasons} from "../components/Reasons/Reasons";
import {Coaching} from "../components/Coaching/Coaching"
import {FAQ} from "../components/FAQ/FAQ";
import {Tab} from "../components/Tab/Tab";
import "./Main_page.css"

export const Main_page = () => {
    return(
        <div className={"container"}>
            <div className={"wrapper_text_top"}>
                <h2>What Is a Life Coach?</h2>
                <p>Life Coaching is a co-creative process between a coach and a client, designed with the purpose to maximize the client’s full potential, both personally and professionally.</p>
                <p>The pursuit of happiness and the quest for meaning are at the center of our human experience. Philosophers and psychologists have attempted to address it since Socrates’ musing: ‘The unexamined life is not worth living.’</p>
                <p>Life Coaching emerged in the last decade and has since become a popular option to facilitate the inquiry for a fulfilling life. A life coach is professionally trained to help clients define and achieve personal and professional goals – finding a soul mate, enhancing relationships, landing a dream job, achieving fitness goals, growing a business, becoming an effective leader, or discovering a purpose in life.</p>
                <p>Life Coaching is a synergistic partnership. By combining intuitive perceptivity with cutting-edge coaching techniques, a coach helps the client shift their perspective to find clarity, create a compelling vision for their future, identify meaningful goals, generate momentum, and implement a consistent action plan. Throughout the process, the coach provides a structure for accountability, feedback, and encouragement.</p>
                <p>Life Coaching is not about giving advice. While a piece of advice may sometimes help to get over a bump in the road, a life coach helps the client to follow their internal compass and chart their own path. A coach encourages the client to take ownership of their hero’s journey, unlocking their inner resources and assists them in working through the challenges on the way – the fears, doubts, loss of focus, limiting beliefs and other forces of inertia.</p>
                <p>A good coach helps the client discover and trust their own voice, instead of adding one more voice to drown out the client’s innate wisdom. For many, coaching is a life-changing experience that dramatically improves their attitude towards work and life.</p>
            </div>
            <img src={require("./main_page_img/img1.jpg")} alt=""/>
        </div>

    );
}