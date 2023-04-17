import React from "react";
import {Reasons} from "../components/Reasons/Reasons";
import {Coaching} from "../components/Coaching/Coaching";
import {Tab} from "../components/Tab/Tab";
import {FAQ} from "../components/FAQ/FAQ";

export const Services = () => {
    return(
        <>
            <Reasons/>
            <Coaching/>
            <Tab/>
            <FAQ/>
        </>
    );
}