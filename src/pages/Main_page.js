import React from "react";
import Upper_red_line from "../components/Upper_red_line/Upper_red_line";
import {Reasons} from "../components/Reasons/Reasons";
import {Coaching} from "../components/Coaching/Coaching"
import {FAQ} from "../components/FAQ/FAQ";
import {Tab} from "../components/Tab/Tab";

export const Main_page = () => {
    return(
        <>
            <Reasons/>
            <Coaching/>
            <Tab/>
            <FAQ/>
        </>

    );
}