import React from 'react';
import {BsChevronDown} from "react-icons/bs";
import {AiOutlineCheck} from "react-icons/ai";
import Home_question_sign from "./../../../../image/home3.png"


const Paket = () => {
    return (
        <>
            <div id="paket">
                    <p className="para">Главная / Пакет участия</p>

                    <div className="paket-block">
                        <h1 className="title">Выберите свой пакет участия</h1>

                        <div className="paket-block-big">
                            <div className="big-block">
                                <p>Месяц +</p>
                                <h1>105,00 $</h1>
                                <button>Ежемесячно</button>

                                <div className="big-block-state">
                                    <AiOutlineCheck/>
                                    <h2>Все статьи</h2>
                                </div>

                                <div className="qwerty1">
                                    <button className="button-block">Оформить подписку</button>
                                </div>

                            </div>

                            <div className="big-block">
                                <p>Год</p>
                                <h1>220,00 $</h1>
                                <button>Ежегодно</button>

                                <div className="big-block-state">
                                    <AiOutlineCheck/>
                                    <h2>Все статьи</h2>
                                </div>
                                <div className="big-block-state-ben">
                                    <AiOutlineCheck/>
                                    <h2 className="be">Все мастер классы</h2>
                                </div>

                                <div className="qwerty">
                                    <button className="button-block">Оформить подписку</button>
                                </div>

                            </div>

                            <div className="big-block">
                                <p> Год +</p>
                                <h1>585,00 $</h1>
                                <button>Ежегодно</button>

                                <div className="big-block-state">
                                    <AiOutlineCheck/>
                                    <h2>Все статьи</h2>
                                </div>
                                <div className="big-block-state-ben">
                                    <AiOutlineCheck/>
                                    <h2 className="be">Все мастер классы</h2>
                                </div>
                                <div className="big-block-state-take">
                                    <AiOutlineCheck/>
                                    <h2>6 новых статей каждый месяц</h2>
                                </div>
                                <div className="big-block-state-take">
                                    <AiOutlineCheck/>
                                    <h2>Доступ к курсу “DevOps - инженер”</h2>
                                </div>

                                <div className="qwerty2">
                                    <button className="button-block">Оформить подписку</button>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

            <div id="home-form">
                <div className="container">
                    <div className="home-form">
                        <div className="home-form_title">
                            <h1>Оставить заявку</h1>
                            <p>Заполните краткую форму с ключевым вопросами, и мы подготовимся к разговору с вами</p>
                        </div>
                        <div className="home-form_form">
                            <form action="src/components/Home/Home-form/Home_form" id="form">
                                <div className="home-form_form-blog">
                                    <span>ФИО*</span>
                                    <input type="text" name="surname-name"/>
                                </div>
                                <div className="home-form_form-blog">
                                    <span>Номер телефон*</span>
                                    <input type="tell" name="phone"/>
                                </div>
                                <div className="home-form_form-blog">
                                    <span>Email*</span>
                                    <input type="email" name="email"/>
                                </div>
                                <button className="home-form_form-btn">Отправить</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div id="home-accordion">
                <div className="container">
                    <div className="home-accordion">
                        <div className="home-accordion_group">
                            <h1>Остались вопросы?</h1>
                            <div>
                                <img src={Home_question_sign} alt=""/>
                            </div>
                        </div>
                        <div className="home-accordion_desc">
                            <div className="home-accordion_desc-accordion">
                                <input type="checkbox" id="accordion1"/>
                                <label htmlFor="accordion1" className="home-accordion_desc-accordion_label">
                                    <p>Что такое зарезервированные слова в программировании?</p>
                                    <BsChevronDown className="home-accordion_desc-accordion_label-icon"/>
                                </label>
                                <div className="home-accordion_desc-accordion_content">
                                    <div>
                                        <p>
                                            Margulan.info – это уникальная экосистема и персональная социальная
                                            сеть, которая соединяет уникальный опыт Маргулана с новейшими
                                            образовательными практиками и возможностями открытой коммуникации
                                            как с Маргуланом так и с другими участниками. Вы получаете полезный
                                            и практический контент, который вдохновляет, дает новые инструменты
                                            и навыки для выхода на новый уровень в вашей карьере, бизнесе и
                                            личной эффективности.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="home-accordion_desc-accordion">
                                <input type="checkbox" id="accordion2"/>
                                <label htmlFor="accordion2" className="home-accordion_desc-accordion_label">
                                    <p>Могу ли я отказаться от автопродления подписки</p>
                                    <BsChevronDown className="home-accordion_desc-accordion_label-icon"/>
                                </label>
                                <div className="home-accordion_desc-accordion_content">
                                    <div>
                                        <p>
                                            Margulan.info – это уникальная экосистема и персональная социальная
                                            сеть, которая соединяет уникальный опыт Маргулана с новейшими
                                            образовательными практиками и возможностями открытой коммуникации
                                            как с Маргуланом так и с другими участниками. Вы получаете полезный
                                            и практический контент, который вдохновляет, дает новые инструменты
                                            и навыки для выхода на новый уровень в вашей карьере, бизнесе и
                                            личной эффективности.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="home-accordion_desc-accordion">
                                <input type="checkbox" id="accordion3"/>
                                <label htmlFor="accordion3" className="home-accordion_desc-accordion_label">
                                    <p>Могу ли я вернуть деньги</p>
                                    <BsChevronDown className="home-accordion_desc-accordion_label-icon"/>
                                </label>
                                <div className="home-accordion_desc-accordion_content">
                                    <div>
                                        <p>
                                            Margulan.info – это уникальная экосистема и персональная социальная
                                            сеть, которая соединяет уникальный опыт Маргулана с новейшими
                                            образовательными практиками и возможностями открытой коммуникации
                                            как с Маргуланом так и с другими участниками. Вы получаете полезный
                                            и практический контент, который вдохновляет, дает новые инструменты
                                            и навыки для выхода на новый уровень в вашей карьере, бизнесе и
                                            личной эффективности.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="home-accordion_desc-accordion">
                                <input type="checkbox" id="accordion4"/>
                                <label htmlFor="accordion4" className="home-accordion_desc-accordion_label">
                                    <p>Какие направление в IT самые актуальные</p>
                                    <BsChevronDown className="home-accordion_desc-accordion_label-icon"/>
                                </label>
                                <div className="home-accordion_desc-accordion_content">
                                    <div>
                                        <p>
                                            Margulan.info – это уникальная экосистема и персональная социальная
                                            сеть, которая соединяет уникальный опыт Маргулана с новейшими
                                            образовательными практиками и возможностями открытой коммуникации
                                            как с Маргуланом так и с другими участниками. Вы получаете полезный
                                            и практический контент, который вдохновляет, дает новые инструменты
                                            и навыки для выхода на новый уровень в вашей карьере, бизнесе и
                                            личной эффективности.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="home-accordion_desc-accordion">
                                <input type="checkbox" id="accordion5"/>
                                <label htmlFor="accordion5" className="home-accordion_desc-accordion_label">
                                    <p>Нужно ли учить другой язык программирования, перед изучением языка С++?</p>
                                    <BsChevronDown className="home-accordion_desc-accordion_label-icon"/>
                                </label>
                                <div className="home-accordion_desc-accordion_content">
                                    <div>
                                        <p>
                                            Margulan.info – это уникальная экосистема и персональная социальная
                                            сеть, которая соединяет уникальный опыт Маргулана с новейшими
                                            образовательными практиками и возможностями открытой коммуникации
                                            как с Маргуланом так и с другими участниками. Вы получаете полезный
                                            и практический контент, который вдохновляет, дает новые инструменты
                                            и навыки для выхода на новый уровень в вашей карьере, бизнесе и
                                            личной эффективности.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="home-accordion_desc-accordion">
                                <input type="checkbox" id="accordion6"/>
                                <label htmlFor="accordion6" className="home-accordion_desc-accordion_label">
                                    <p> Платформа обнавляется?</p>
                                    <BsChevronDown className="home-accordion_desc-accordion_label-icon"/>
                                </label>
                                <div className="home-accordion_desc-accordion_content">
                                    <div>
                                        <p>
                                            Margulan.info – это уникальная экосистема и персональная социальная
                                            сеть, которая соединяет уникальный опыт Маргулана с новейшими
                                            образовательными практиками и возможностями открытой коммуникации
                                            как с Маргуланом так и с другими участниками. Вы получаете полезный
                                            и практический контент, который вдохновляет, дает новые инструменты
                                            и навыки для выхода на новый уровень в вашей карьере, бизнесе и
                                            личной эффективности.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="home-accordion_desc-accordion">
                                <input type="checkbox" id="accordion7"/>
                                <label htmlFor="accordion7" className="home-accordion_desc-accordion_label">
                                    <p>Как я могу получить доступ ка всем курсом</p>
                                    <BsChevronDown className="home-accordion_desc-accordion_label-icon"/>
                                </label>
                                <div className="home-accordion_desc-accordion_content">
                                    <div>
                                        <p>
                                            Margulan.info – это уникальная экосистема и персональная социальная
                                            сеть, которая соединяет уникальный опыт Маргулана с новейшими
                                            образовательными практиками и возможностями открытой коммуникации
                                            как с Маргуланом так и с другими участниками. Вы получаете полезный
                                            и практический контент, который вдохновляет, дает новые инструменты
                                            и навыки для выхода на новый уровень в вашей карьере, бизнесе и
                                            личной эффективности.
                                        </p>
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

export default Paket;