import React from 'react';
import {RxReader} from "react-icons/rx";

const PageArticles = () => {
    return (
        <>
            <div id="page-articles">
                <div className="container">
                    <div className="page-articles">
                        <h1 className="page-articles_title">Другие статьи </h1>
                        <div className="page-articles_blogs">
                            <div className="page-articles_blogs-blog">
                                <span className="page-articles_blogs-blog_title">Статьи</span>
                                <p className="page-articles_blogs-blog-p">Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training Center. </p>
                                <div className="page-articles_blogs-blog_group">
                                    <div className="page-articles_blogs-blog_group-group">
                                        <RxReader className="reader-icon"/>
                                        <span>Читать</span>
                                    </div>
                                    <span className="page-articles_blogs-blog_group-date">21.09.2022</span>
                                </div>
                            </div>
                            <div className="page-articles_blogs-blog">
                                <span className="page-articles_blogs-blog_title">Статьи</span>
                                <p className="page-articles_blogs-blog-p">Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training Center. </p>
                                <div className="page-articles_blogs-blog_group">
                                    <div className="page-articles_blogs-blog_group-group">
                                        <RxReader className="reader-icon"/>
                                        <span>Читать</span>
                                    </div>
                                    <span className="page-articles_blogs-blog_group-date">21.09.2022</span>
                                </div>
                            </div>
                            <div className="page-articles_blogs-blog">
                                <span className="page-articles_blogs-blog_title">Статьи</span>
                                <p className="page-articles_blogs-blog-p">Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training Center. </p>
                                <div className="page-articles_blogs-blog_group">
                                    <div className="page-articles_blogs-blog_group-group">
                                        <RxReader className="reader-icon"/>
                                        <span>Читать</span>
                                    </div>
                                    <span className="page-articles_blogs-blog_group-date">21.09.2022</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PageArticles;