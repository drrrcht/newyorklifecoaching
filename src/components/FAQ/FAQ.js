import React from "react";
import "./css/FAQ.css";

export const FAQ = () => {
  return (
    <>
      <div className="faq_header">
        <p>Вопрос-ответ</p>
      </div>
      <div className="faq_container">
        <div className="row">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button accordion-color"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <div className="accordion_item_header">
                    Что такое энергетический коучинг?
                  </div>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show accordion-color"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="accordion_item_text">
                    Энергетический коучинг – это метод изменения жизни к
                    лучшему. Это не волшебная таблетка или магия, а методика,
                    основанная на законах квантовой физики.
                  </div>
                  <div className="accordion_item_text">
                    Как это работает? Научно доказано – разум делится на
                    сознательный и подсознательный. Сознательный составляет 10%.
                    Он обрабатывает поступающую из внешнего мира информацию. На
                    уровне подсознания хранится 90% информации. Это весь наш
                    опыт. Подсознание может быть помощником или, наоборот, –
                    ограничением.
                  </div>
                  <div className="accordion_item_text">
                    Например, в экстремальной ситуации человек быстро и верно
                    среагировал, что спасло ему жизнь. Другой пример: человеку
                    постоянно не везет в отношениях. Все союзы идут по одному и
                    тому же сценарию. Так происходит, когда он неосознанно
                    попадает под влияние негативных установок и убеждений,
                    программ ума и страхов.
                  </div>
                  <div className="accordion_item_text">
                    В энергетических сессиях и консультациях я нахожу все
                    скрытые блоки и избавляю вас от них. Быстро и эффективно
                    решаю вопрос, с которым вы пришли на сессию.
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed accordion-color"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <div className="accordion_item_header">
                    Как вы помогаете своим клиентам?
                  </div>
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse accordion-color"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="accordion_item_text">
                    Сила подсознания влияет на все сферы жизни.
                  </div>
                  <div className="accordion_item_text">
                    С помощью энергетических методик я соединяюсь с вашим
                    подсознанием. Нахожу эмоциональные и ментальные блоки.
                    Ликвидирую их и завершаю негативные сценарии.
                  </div>
                  <div className="accordion_item_text">
                    Зачем это? Вы действуете в настоящем, опираясь на прошлые
                    опыты. Когда-то они были вам нужны и приносили пользу. Но
                    когда вы выбираете изменить то, что происходит в настоящем,
                    это значит, что прошлые опыты для вас больше не работают.
                    Требуется другой сценарий.
                  </div>
                  <div className="accordion_item_text">
                    Я обучаю ваш мозг и тело новым чувствам и знаниям. Так
                    создаются новые нейронные связи и меняется мышление.
                    Изменение внутренней энергии по закону притяжения запускает
                    трансформацию во внешней реальности. Те, кто хочет больше
                    денег – получают их. Кто мечтал о гармоничных отношениях,
                    находят подходящего партнера. И так далее. Жизненный путь
                    становится легче. Раскрывается потенциал для развития. Все
                    это происходит быстро и естественно.
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed accordion-color"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <div className="accordion_item_header">Какой у вас опыт?</div>
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse accordion-color"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="accordion_item_text">
                    Более 7 лет я изучаю и практикую методы психологии,
                    коучинга, работы с подсознанием и смены мышления. В своих
                    консультациях я применяю авторские техники, проверенные на
                    себе, моих близких и клиентах.{" "}
                  </div>
                  <div className="accordion_item_text">
                    Трехлетняя практика показала, что мой уникальный подход
                    помогает достигать результатов быстро и эффективно.
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed accordion-color"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  <div className="accordion_item_header">
                    Как происходит трансформация в энергетической консультации?
                  </div>
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse accordion-color"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="accordion_item_text">
                    Все есть энергия. Квантовые физики доказали это еще в 1900
                    году. На мета уровне мы часть единого энергетического
                    потока. Поэтому для меня, как для энергопратика, возможно
                    соединиться с вашим подсознанием и увидеть то, что скрыто от
                    вашего сознательного разума.{" "}
                  </div>
                  <div className="accordion_item_text">
                    Желаемые изменения в сессии тоже происходят по законам
                    квантовой физики. Здесь работает эффект наблюдателя. Ученые
                    доказали, что в присутствии наблюдателя объекты меняют свои
                    энергетические свойства. В сессии я направляю свое внимание
                    на ваши изменения, благодаря чему они и происходят.
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSix">
                <button
                  className="accordion-button collapsed accordion-color"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  <div className="accordion_item_header">
                    Чем энергетические консультации отличаются от традиционных?
                  </div>
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse accordion-color"
                aria-labelledby="headingSix"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="accordion_item_text">
                    В психологии тоже существуют техники работы с квантовым
                    полем (расстановки, эмоционально образная терапия и т.д.).
                    Но большинство психологов выбирают классические методы
                    терапии. Они действенны, но процесс проработки блоков
                    происходит значительно медленнее, чем в энергетической
                    сессии. Один энергосеанс может быть эффективнее, чем пять
                    консультаций психолога. Энергопрактик способен найти корень
                    проблемы в подсознании за одну сессию.{" "}
                  </div>
                  <div className="accordion_item_text">
                    Традиционные психологи работают на уровне сознательного
                    разума. На этом уровне множество барьеров ума. Чтобы
                    пробраться через них, требуется больше времени. В
                    энергетической сессии процесс происходит в обход этих
                    препятствий.{" "}
                  </div>
                  <div className="accordion_item_text">
                    Преимущество энергосеансов – комфорт и безболезненность.
                    Даже, если мы идем в травматическое событие прошлого, этот
                    процесс происходит мягко. Энергосессии – наиболее гуманный
                    метод саморазвития. После сеанса вы будете чувствовать себя
                    легко.
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSeven">
                <button
                  className="accordion-button collapsed accordion-color"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseSeven"
                >
                  <div className="accordion_item_header">
                    С какими сферами жизни вы работаете?
                  </div>
                </button>
              </h2>
              <div
                id="collapseSeven"
                className="accordion-collapse collapse accordion-color"
                aria-labelledby="headingSeven"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="accordion_item_text">
                    У меня большой опыт работы с разными ситуациями, состояниями
                    и запросами.
                  </div>
                  <div className="accordion_item_text">
                    На самом деле, с чем бы вы не обратились ко мне, мы выйдем
                    на ваши отношения с собой. И мой талант в том, чтобы
                    помогать людям познавать себя и жить в гармонии с собой.
                    Раскрывать и реализовывать потенциал. Выбирать себя и свои
                    желания, а не быть всем должным. Легко и быстро переходить
                    на новый – лучший уровень жизни.
                  </div>
                  <div className="accordion_item_text">
                    Ко мне можно обратиться и получить результат в решении
                    вопросов:
                  </div>
                  <ul>
                    <li className="accordion_item_text">
                      отношения: к себе, с партнером, детьми, родом
                    </li>
                    <li className="accordion_item_text">личностное развитие</li>
                    <li className="accordion_item_text">
                      предназначение и путь
                    </li>
                    <li className="accordion_item_text">
                      ресурсное состояние{" "}
                    </li>
                    <li className="accordion_item_text">
                      деньги и самореализация
                    </li>
                    <li className="accordion_item_text">утрата близкого</li>
                    <li className="accordion_item_text">внешность и тело</li>
                    <li className="accordion_item_text">
                      эмоциональное и физическое состояние
                    </li>
                    <li className="accordion_item_text">
                      ситуация сложного выбора
                    </li>
                  </ul>
                  <div className="accordion_item_text">
                    Если среди перечисленного вы не нашли свой вопрос,
                    пожалуйста, свяжитесь со мной. Мы вместе сформулируем ваш
                    запрос и решим его.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
