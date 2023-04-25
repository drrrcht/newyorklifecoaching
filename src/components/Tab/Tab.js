import React from "react";
import "bootstrap/dist/css/bootstrap-grid.min.css"
import "./css/Tab.css"


export const Tab = () => {
    return(
        <section>
            <div className="container">
                <div className="row">
                    <div className="col tab_margin">
                        <div className="tab">
                            <div className="tab_img">
                                <img src={require('./img/img.jpg')} className={"tab_img"}/>
                            </div>
                            <div className="header_tab">3-Month Coaching Package</div>
                            <div className="text_tab">Designed for people who are seeking a comprehensive shift in their
                                life, with the opportunity to focus on many areas. Start with one Visioning Session,
                                followed by 5 bi-weekly video coaching sessions with accountability support in between.
                            </div>
                        </div>
                    </div>
                    <div className="col tab_margin">
                        <div className="tab">
                            <div className="tab_img">
                                <img src={require('./img/img.jpg')} className={"tab_img"}/>
                            </div>
                            <div className="header_tab">3-Month Coaching Package</div>
                            <div className="text_tab">Designed for people who are seeking a comprehensive shift in their
                                life, with the opportunity to focus on many areas. Start with one Visioning Session,
                                followed by 5 bi-weekly video coaching sessions with accountability support in between.
                            </div>
                        </div>
                    </div>
                    <div className="col tab_margin">
                        <div className="tab">
                            <div className="tab_img">
                                <img src={require('./img/img.jpg')} className={"tab_img"}/>
                            </div>
                            <div className="header_tab">3-Month Coaching Package</div>
                            <div className="text_tab">Designed for people who are seeking a comprehensive shift in their
                                life, with the opportunity to focus on many areas. Start with one Visioning Session,
                                followed by 5 bi-weekly video coaching sessions with accountability support in between.
                            </div>
                        </div>
                    </div>
                    <div className="red-button tab-red-btn">
                        <p>CLICK HERE TO GET STARTED!</p>
                    </div>
                </div>
            </div>
        </section>
    );
}