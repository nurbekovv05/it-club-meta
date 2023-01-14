import React from 'react';
import Home_statya_img from './../../../image/home-statya.png';
import {RxReader} from "react-icons/rx";
import {NavLink} from "react-router-dom";



const HomeStatya = () => {
    return (
        <>
            <div id="home-statya">
                <div className="container">
                    <div className="home-statya">
                        <h2 className="home-statya_title">Последние статьи</h2>
                        <div className="home-statya_blogs">
                            <div className="home-statya_blogs-blog">
                                <div className="home-statya_blogs-blog_img">
                                    <img src={Home_statya_img} alt=""/>
                                </div>
                                <div className="home-statya_blogs-blog_desc">
                                    <span>Статьи</span>
                                    <p>Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training Center. </p>
                                    <div className="home-statya_blogs-blog_desc-group">
                                        <div>
                                            <RxReader className="reader-icon"/>
                                            <NavLink className="home-read" to={"/Home-Page"}>Читать</NavLink>
                                        </div>
                                        <span>01.02.2022</span>
                                    </div>
                                </div>
                            </div>
                            <div className="home-statya_blogs-blog">
                                <div className="home-statya_blogs-blog_img">
                                    <img src={Home_statya_img} alt=""/>
                                </div>
                                <div className="home-statya_blogs-blog_desc">
                                    <span>Статьи</span>
                                    <p>Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training Center. </p>
                                    <div className="home-statya_blogs-blog_desc-group">
                                        <div>
                                            <RxReader className="reader-icon"/>
                                            <NavLink className="home-read" to={"/Home-Page"}>Читать</NavLink>
                                        </div>
                                        <span>01.02.2022</span>
                                    </div>
                                </div>
                            </div>
                            <div className="home-statya_blogs-blog">
                                <div className="home-statya_blogs-blog_img">
                                    <img src={Home_statya_img} alt=""/>
                                </div>
                                <div className="home-statya_blogs-blog_desc">
                                    <span>Статьи</span>
                                    <p>Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training Center. </p>
                                    <div className="home-statya_blogs-blog_desc-group">
                                        <div>
                                            <RxReader className="reader-icon"/>
                                            <NavLink className="home-read" to={"/Home-Page"}>Читать</NavLink>
                                        </div>
                                        <span>01.02.2022</span>
                                    </div>
                                </div>
                            </div>
                            <div className="home-statya_blogs-blog">
                                <div className="home-statya_blogs-blog_img">
                                    <img src={Home_statya_img} alt=""/>
                                </div>
                                <div className="home-statya_blogs-blog_desc">
                                    <span>Статьи</span>
                                    <p>Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training Center. </p>
                                    <div className="home-statya_blogs-blog_desc-group">
                                        <div>
                                            <RxReader className="reader-icon"/>
                                            <NavLink className="home-read" to={"/Home-Page"}>Читать</NavLink>
                                        </div>
                                        <span>01.02.2022</span>
                                    </div>
                                </div>
                            </div>
                            <div className="home-statya_blogs-blog">
                                <div className="home-statya_blogs-blog_img">
                                    <img src={Home_statya_img} alt=""/>
                                </div>
                                <div className="home-statya_blogs-blog_desc">
                                    <span>Статьи</span>
                                    <p>Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training Center. </p>
                                    <div className="home-statya_blogs-blog_desc-group">
                                        <div>
                                            <RxReader className="reader-icon"/>
                                            <NavLink className="home-read" to={"/Home-Page"}>Читать</NavLink>
                                        </div>
                                        <span>01.02.2022</span>
                                    </div>
                                </div>
                            </div>
                            <div className="home-statya_blogs-blog">
                                <div className="home-statya_blogs-blog_img">
                                    <img src={Home_statya_img} alt=""/>
                                </div>
                                <div className="home-statya_blogs-blog_desc">
                                    <span>Статьи</span>
                                    <p>Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training Center. </p>
                                    <div className="home-statya_blogs-blog_desc-group">
                                        <div>
                                            <RxReader className="reader-icon"/>
                                            <NavLink className="home-read" to={"/Home-Page"}>Читать</NavLink>
                                        </div>
                                        <span>01.02.2022</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="home-statya_btn">Показать больше</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeStatya;