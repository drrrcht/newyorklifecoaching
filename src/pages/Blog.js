import React from "react";
import {Card} from "../components/Card/Card";
import "bootstrap/dist/css/bootstrap-grid.min.css"

export const Blog = () => {
    return(
        <div className={"wrapper_card_flex container"}>
            <div className={"row"}>
                <div className={"col"}><Card/></div>
                <div className={"col"}><Card/></div>
                <div className={"col"}><Card/></div>
                <div className={"col"}><Card/></div>
                <div className={"col"}><Card/></div>
                <div className={"col"}><Card/></div>
            </div>
        </div>
    );
}