import React from "react";
import "bootstrap/dist/css/bootstrap-reboot.min.css"
import "bootstrap/dist/css/bootstrap-grid.min.css"
import "./css/Card.css"

export const Card = () => {
    return(
        <div className={"container-fluid"}>

                <div className={"wrapper_card"}>
                    <div className={"img_card"}>
                        <img src={require("./img/img_blog_item.jpg")}/>
                    </div>

                    <div className={"wrapper_text_card"}>
                        <div className={"header_card"}>
                            In Order to Know, You First Need to Love
                        </div>

                        <div className={"text_card"}>
                            <p>“A drop of love is more than an ocean of knowledge.” ~ Blaise Pascal Over the years, I have encountered some clients who are already in a steady relationship but are ‘unsure’ if it’s the right move to ...</p>
                        </div>

                        <div className={"read_more"}>
                            <span>Read More </span> >
                        </div>
                    </div>
                </div>

        </div>
    );
}