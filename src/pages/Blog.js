import React from "react";
import {Card} from "../components/Card/Card";
import "bootstrap/dist/css/bootstrap-grid.min.css"
import {Footer} from "../components/Footer/Footer";

export const Blog = () => {
    return(
        <>
            <div className="faq_header">
                <p>Blog</p>
            </div>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-sm-4 col"}><Card/></div>
                    <div className={"col-sm-4 col"}><Card/></div>
                    <div className={"col-sm-4 col"}><Card/></div>
                    <div className={"col-sm-4 col"}><Card/></div>
                    <div className={"col-sm-4 col"}><Card/></div>
                    <div className={"col-sm-4 col"}><Card/></div>
                </div>
            </div>
        </>
    );
}