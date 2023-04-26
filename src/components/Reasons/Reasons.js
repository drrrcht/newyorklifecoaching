import React from "react";
import "./css/Reasons.css"

export const Reasons = () => {
    return(
        <div className="reasons container">
            <div className="container">
                <div className="row">
                    <div className="wrapper_help_promo_text">
                        <h2 className="centered-title">Are you ready to make a quantum leap?</h2>
                        <p>No matter what you want to change in life, the process is the same. I can help you navigate
                            this process. Together we identify what matters most to you, what has been limiting you, and
                            we design a personalized action plan to help you move forward. Most importantly, I keep you
                            accountable for taking aligned action to stay on track.</p>
                    </div>
                    <h2 className="centered-title" style={{margin:"35px auto 55px auto"}}>I can help you with:</h2>
                    <div className="col-md-6">
                        <div className="reasons_block">
                            <div className="reasons_round">
                                <img src="icons/reasons/reason_1.png" alt="reason"/>
                            </div>
                            <div className="reasons_descr">
                                <div className="reasons_subtitle">Career, Work, Business</div>
                                <div className="reasons_text">
                                    Improve career satisfaction Transition to a fulfilling career Start or grow your
                                    business Transform your money mindset
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="reasons_block">
                            <div className="reasons_round">
                                <img src="icons/reasons/reason_2.png" alt="reason"/>
                            </div>
                            <div className="reasons_descr">
                                <div className="reasons_subtitle">People and Relationships</div>
                                <div className="reasons_text">
                                    Find a soul mate Increase emotional intimacy Learn effective communication Cultivate
                                    support networks
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="reasons_block">
                            <div className="reasons_round">
                                <img src="icons/reasons/reason_3.png" alt="reason"/>
                            </div>
                            <div className="reasons_descr">
                                <div className="reasons_subtitle">Emotional and Physical Well-being</div>
                                <div className="reasons_text">
                                    Eliminate worries, stress and anxiety Lose weight and gain energy Develop healthy
                                    habits
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="reasons_block">
                            <div className="reasons_round">
                                <img src="icons/reasons/reason_4.png" alt="reason"/>
                            </div>
                            <div className="reasons_descr">
                                <div className="reasons_subtitle">Personal growth</div>
                                <div className="reasons_text">
                                    Improve self-esteem and confidence Add more play, adventure, creativity to life
                                    Realize your true potential
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}