import React from "react";
import "bootstrap/dist/css/bootstrap-reboot.min.css"
import "bootstrap/dist/css/bootstrap-grid.min.css"
import {Block_about_first} from "../components/Block_about_first/Block_about_first";
import {Block_about_second} from "../components/Block_about_second/Block_about_second";
import {Photo_about} from "../components/Photo_about/Photo_about";
import Carousel from "../components/Carousel/Carousel.js";

export const About = () => {
    return(
        <>
            <Photo_about/>
            <div className={"container"}>
                <Block_about_first/>
                <Block_about_second/>
            </div>
            <div style={{ marginBottom: "80px" }}>
                <Carousel/>
            </div>
        </>
    );
}