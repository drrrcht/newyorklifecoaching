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
                                <img src={require('./img/main1.png')} className={"tab_img"}/>
                            </div>
                            <div className="header_tab">Консультация</div>
                            <div className="text_tab">В энергетических сессиях и консультациях мы находим все скрытые подсознательные блоки и избавляемся от них. 
                                Быстро и эффективно решаем вопрос, с которым вы пришли на сессию. У меня большой опыт работы с разными ситуациями, состояниями и запросами.
                            </div>
                        </div>
                    </div>
                    <div className="col tab_margin">
                        <div className="tab">
                            <div className="tab_img">
                                <img src={require('./img/main3.png')} className={"tab_img"}/>
                            </div>
                            <div className="header_tab">Диагностика и корректировка судьбы</div>
                            <div className="text_tab">С помощью метода «Матрица Судьбы» я составлю карту вашего жизненного пути. 
                                Обладая большим опытом в энергетических практиках, я даю точную информацию. Вы получаете не только знания, 
                                но и практические рекомендации, чтобы улучшить жизнь быстро и результативно.
                            </div>
                        </div>
                    </div>
                    <div className="col tab_margin">
                        <div className="tab">
                            <div className="tab_img">
                                <img src={require('./img/main2.png')} className={"tab_img"}/>
                            </div>
                            <div className="header_tab">Наставничество</div>
                            <div className="text_tab">Если вы хотите совершить квантовый скачок, вам подойдет индивидуальное 
                                наставничество. Я обладаю большим арсеналом техник, в том числе авторских, и мастерски их сочетаю. 
                                Моя программа наставничества – индивидуальна, уникальна и эффективна. 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}