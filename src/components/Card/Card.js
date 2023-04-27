import React from "react";
import "bootstrap/dist/css/bootstrap-reboot.min.css"
import "bootstrap/dist/css/bootstrap-grid.min.css"
import "./css/Card.css"
import {Link} from "react-router-dom";

export const Card = () => {
    return(
        <div>
            <div className={"wrapper_card"}>
                <Link to={"/blog/blog_page"} style={{textDecoration: "none"}}>
                    <div className={"img_card"}>
                        <img src={require("./img/img_blog_item.jpg")}/>
                    </div>
                </Link>

                <div className={"wrapper_text_card"}>
                    <Link to={"/blog/blog_page"} style={{textDecoration: "none"}}>
                        <div className={"header_card"}>
                            In Order to Know, You First Need to Love
                        </div>
                    </Link>

                    <div className={"text_card"}>
                        <p>“A drop of love is more than an ocean of knowledge.” ~ Blaise Pascal Over the years, I have encountered some clients who are already in a steady relationship but are ‘unsure’ if it’s the right move to ...</p>
                    </div>
                    <Link to={"/blog/blog_page"} style={{textDecoration: "none"}}>
                        <div className={"read_more-blog"}>
                            <span>Read More </span> >
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}