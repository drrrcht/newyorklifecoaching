import React from "react";
import {Reasons} from "../components/Reasons/Reasons";
import {Coaching} from "../components/Coaching/Coaching";
import {Tab} from "../components/Tab/Tab";
import {FAQ} from "../components/FAQ/FAQ";
import CarouselFadeExample from "../components/Carousel/Carousel";
import {Photo} from "../components/Photo/Photo";
import {Form} from "../components/Form/Form";
import {Footer} from "../Footer/Footer";

export const Services = () => {
    return(
        <>
            <Photo/>
            <div className={"container"}>
                <Reasons/>
                <Coaching/>
                <Tab/>
                <CarouselFadeExample/>
                <Form/>
                <FAQ/>
            </div>
            <Footer/>
        </>
    );
}