import React from 'react';

const HomeForm = () => {
    return (
        <>
            <div id="home-form">
                <div className="container">
                    <div className="home-form">
                        <div className="home-form_title">
                            <h1>Оставить заявку</h1>
                            <p>Заполните краткую форму с ключевым вопросами, и мы подготовимся к разговору с вами</p>
                        </div>
                        <div className="home-form_form">
                            <form action="" id="form">
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
        </>
    );
};

export default HomeForm;