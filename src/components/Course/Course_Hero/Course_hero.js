import React from 'react';
import {NavLink} from "react-router-dom";
import {BsArrowRight} from "react-icons/bs"


const Course_hero = () => {


    return (
        <div id="course">
            <div className="container">
                <div className="course-span">
                    <span>Главная / Наши курсы</span>
                </div>

                <div className="course-block">
                    <h1 className="course-block-title">Курсы</h1>
                    <div className="course-block-info">
                        <div className="course-block-frontend">
                            <div className="course-text-info">
                                <h2>Frontend-разработчик</h2>
                                <p>Мастер создания сайтов. Умеет делать их красивыми, интерактивными, с большим функционалом. Профессия отлично подойдет тем, кто хочет фрилансить и постоянно разрабатывать новые проекты</p>
                                <div className="course-nav">
                                    <NavLink className="nav-course" to={"/Frontend"}>Подробнее</NavLink>
                                    <BsArrowRight/>
                                </div>
                            </div>
                        </div>
                        <div className="course-block-backend">
                            <div className="course-text-info">
                                <h2>Backend-разработчик</h2>
                                <p>Специалист, который отвечает за построение логики для воплощения любой идеи. Он собирает фундамент и опорную систему для проекта - от простого сайта для магазина одежды до сложных вычислительных систем нейронных сетей.</p>
                                <div className="course-nav">
                                    <NavLink className="nav-course" to={"/Frontend"}>Подробнее</NavLink>
                                    <BsArrowRight/>
                                </div>
                            </div>
                        </div>
                        <div className="course-block-ui-ux">
                            <div className="course-text-info">
                                <h2>UX / UI Дизайнер</h2>
                                <p>Креативный специалист, который придумывает дизайн и интерфейс продукта. Специалист UX/UI отвечает за подбор форм, цветов, Функциональности дизайна и прочих важных параметров для комфорьного использования продукта.</p>
                                <div className="course-nav">
                                    <NavLink className="nav-course" to={"/Frontend"}>Подробнее</NavLink>
                                    <BsArrowRight/>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="course-block-info2">
                        <div className="course-block-frontend">
                            <div className="course-text-info">
                                <h2>DevOps - инженер</h2>
                                <p>Он разбирается в программировании и инфраструктуре и объединяет эти знания для оптимальной работы бизнеса.</p>
                                <div className="course-nav-devops">
                                    <NavLink className="nav-course" to={"/Frontend"}>Подробнее</NavLink>
                                    <BsArrowRight/>
                                </div>
                            </div>
                        </div>
                        <div className="course-block-backend">
                            <div className="course-text-info">
                                <h2>Android-разработчик</h2>
                                <p>Создает, обновляет, усовершенствует мобильные приложения для смартфонов, планшетов, электронных книг, игровых приставок и других девайсов, работающих на операционной системе Android.</p>
                                <div className="course-nav-android">
                                    <NavLink className="nav-course" to={"/Frontend"}>Подробнее</NavLink>
                                    <BsArrowRight/>
                                </div>
                            </div>
                        </div>
                        <div className="course-block-ui-ux">
                            <div className="course-text-info">
                                <h2>Java-разработчик</h2>
                                <p>Cпециалист, который создает приложения разной сложности, используя старейший язык программирования.
                                </p>
                                <div className="course-nav-java">
                                    <NavLink className="nav-course" to={"/Frontend"}>Подробнее</NavLink>
                                    <BsArrowRight/>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="course-block-info3">
                        <div className="course-block-frontend">
                            <div className="course-text-info">
                                <h2>С++ - разработчик</h2>
                                <p>Занимается разработкой высокопроизводительных и высоконагруженных систем, таких как поисковики, драйверы, игры и приложения. </p>
                                <div className="course-nav-c">
                                    <NavLink className="nav-course" to={"/Frontend"}>Подробнее</NavLink>
                                    <BsArrowRight/>
                                </div>
                            </div>
                        </div>
                        <div className="course-block-backend">
                            <div className="course-text-info">
                                <h2>IOS - разработчик</h2>
                                <p>iOS разработчик - идеальная профессия для того, кто любит мобильную продукцию компании Apple. Специальность позволяет совмещать творческие способности.
                                </p>
                                <div className="course-nav-ios">
                                    <NavLink className="nav-course" to={"/Frontend"}>Подробнее</NavLink>
                                    <BsArrowRight/>
                                </div>
                            </div>
                        </div>
                        <div className="course-block-ui-ux">
                            <div className="course-text-info">
                                <h2>Python - разработчик</h2>
                                <p>Cпециалист, который применяет в работе многоуровневый язык программирования Python.</p>
                                <div className="course-nav-python">
                                    <NavLink className="nav-course" to={"/Frontend"}>Подробнее</NavLink>
                                    <BsArrowRight/>
                                </div>
                            </div>
                        </div>

                    </div>




                </div>

            </div>

        </div>
    );
};


export default Course_hero;