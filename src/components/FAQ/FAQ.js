import React from "react";
import "./css/FAQ.css"



export const FAQ = () => {

return (
    <>
        <div className="faq_header">
            <p>FAQ</p>
        </div>
    <div className="container">
        <div className="row">
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button accordion-color" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <div className="accordion_item_header">
                                What is life coaching?
                            </div>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show accordion-color" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className="accordion_item_text">A life coach is a professional who helps clients achieve their personal and professional goals – finding a soul mate, landing a dream job, growing a business, enhancing relationships, achieving health and fitness goals, becoming an effective leader, or discovering a purpose in life.</div>
                            <div className="accordion_item_text">Sometimes people are not clear about what exactly they want. Life coaching provides them with guidance on how to make decisions at various crossroads in life.</div>
                            <div className="accordion_item_text">Life coaching offers no magic bullets or quick fixes. It evolved from the principles of positive psychology and it empowers clients to generate lasting transformation. It takes time to build physical muscles and, similarly, a life coach helps to build clients’ mental, emotional and spiritual “muscles” so they can approach life more effectively. Clients will gradually develop the strength to face challenges in life with ease and grace.</div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed accordion-color" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <div className="accordion_item_header">
                                How do you help your clients?
                            </div>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse accordion-color" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Это тело аккордеона 2 элемента.</strong> По умолчанию он скрыт, пока плагин свертывания не добавит соответствующие классы, которые мы используем для стилизации каждого элемента. Эти классы управляют общим внешним видом, а также отображением и скрытием с помощью переходов CSS. Вы можете изменить все это с помощью собственного CSS или переопределить наши переменные по умолчанию. Также стоит отметить, что практически любой HTML может быть помещен в <code>.accordion-body</code>, хотя переход ограничивает переполнение.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed accordion-color" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <div className="accordion_item_header">
                                What is your background?
                            </div>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse accordion-color" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Это тело аккордеона 3 элемента.</strong> По умолчанию оно скрыто, пока плагин свертывания не добавит соответствующие классы, которые мы используем для стилизации каждого элемента. Эти классы управляют общим внешним видом, а также отображением и скрытием с помощью переходов CSS. Вы можете изменить все это с помощью собственного CSS или переопределить наши переменные по умолчанию. Также стоит отметить, что практически любой HTML может быть помещен в <code>.accordion-body</code>, хотя переход ограничивает переполнение.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed accordion-color" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            <div className="accordion_item_header">
                                What happens during a life coaching session?
                            </div>
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse accordion-color" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>Это тело аккордеона 4 элемента.</strong> По умолчанию он скрыт, пока плагин свертывания не добавит соответствующие классы, которые мы используем для стилизации каждого элемента. Эти классы управляют общим внешним видом, а также отображением и скрытием с помощью переходов CSS. Вы можете изменить все это с помощью собственного CSS или переопределить наши переменные по умолчанию. Также стоит отметить, что практически любой HTML может быть помещен в <code>.accordion-body</code>, хотя переход ограничивает переполнение.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                        <button className="accordion-button collapsed accordion-color" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            <div className="accordion_item_header">
                                How does life coaching differ from traditional therapies?
                            </div>
                        </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse accordion-color" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Это тело аккордеона 5 элемента.</strong> По умолчанию он скрыт, пока плагин свертывания не добавит соответствующие классы, которые мы используем для стилизации каждого элемента. Эти классы управляют общим внешним видом, а также отображением и скрытием с помощью переходов CSS. Вы можете изменить все это с помощью собственного CSS или переопределить наши переменные по умолчанию. Также стоит отметить, что практически любой HTML может быть помещен в <code>.accordion-body</code>, хотя переход ограничивает переполнение.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                        <button className="accordion-button collapsed accordion-color" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                            <div className="accordion_item_header">
                                Who do you work with?
                            </div>
                        </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse accordion-color" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Это тело аккордеона 6 элемента.</strong> По умолчанию он скрыт, пока плагин свертывания не добавит соответствующие классы, которые мы используем для стилизации каждого элемента. Эти классы управляют общим внешним видом, а также отображением и скрытием с помощью переходов CSS. Вы можете изменить все это с помощью собственного CSS или переопределить наши переменные по умолчанию. Также стоит отметить, что практически любой HTML может быть помещен в <code>.accordion-body</code>, хотя переход ограничивает переполнение.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeven">
                        <button className="accordion-button collapsed accordion-color" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                            <div className="accordion_item_header">
                                Are your services covered by insurance?
                            </div>
                        </button>
                    </h2>
                    <div id="collapseSeven" className="accordion-collapse collapse accordion-color" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Это тело аккордеона 7 элемента.</strong> По умолчанию он скрыт, пока плагин свертывания не добавит соответствующие классы, которые мы используем для стилизации каждого элемента. Эти классы управляют общим внешним видом, а также отображением и скрытием с помощью переходов CSS. Вы можете изменить все это с помощью собственного CSS или переопределить наши переменные по умолчанию. Также стоит отметить, что практически любой HTML может быть помещен в <code>.accordion-body</code>, хотя переход ограничивает переполнение.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="btn_link">
            <p>READY TO WORK TOGETHER? CLICK HERE TO GET STARTED.</p>
        </div>
    </div>
    </>
    );
}