import {Reasons} from "../components/Reasons/Reasons";
import {Coaching} from "../components/Coaching/Coaching";
import {Tab} from "../components/Tab/Tab";
import {FAQ} from "../components/FAQ/FAQ";
import CarouselFadeExample from "../components/Carousel/Carousel";
import {Photo} from "../components/Photo/Photo";
import Form from "../components/Form/Form";
import {Testimonial} from "../components/Testimonial/Testimonial";
import "../App.css"
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export const Services = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return(
        <>
            <Photo/>
            <Reasons/>
            <Coaching/>
            <Tab/>
            <CarouselFadeExample/>
            <Form/>
            <Carousel activeIndex={index} onSelect={handleSelect} className={"container"} fade controls={false}>
                <Carousel.Item>
                    <Testimonial/> <Testimonial/>
                </Carousel.Item>
                <Carousel.Item>
                    <Testimonial/> <Testimonial/>
                </Carousel.Item>
            </Carousel>
            <FAQ/>
        </>
    );
}