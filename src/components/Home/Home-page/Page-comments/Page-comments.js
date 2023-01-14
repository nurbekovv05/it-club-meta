import React from 'react';
// import User_image from './../../../../image/home7.png';

const PageComments = () => {
    return (
        <>
            <div id="page-comments">
                <div className="container">
                    <div className="page-comments">
                        <h1 className="page-comments_title">Комментарии</h1>
                        <div className="page-comments_blog">
                            <textarea placeholder="Ваш комментарий"></textarea>
                            <button className="page-comments_blog-btn" >Отправить </button>
                        </div>
                        <div className="page-comments_blogs">
                            <div className="page-comments_blogs-blog">
                                <div className="page-comments_blogs-blog_top-group">
                                    <div className="page-comments_blogs-blog_top-group_bg">
                                        <div>
                                            {/*<img src={User_image} alt=""/>*/}
                                        </div>
                                    </div>
                                    <div className="page-comments_blogs-blog_top-group_desc">
                                        <div className="page-comments_blogs-blog_top-group_desc-group">
                                            <span className="page-comments_blogs-blog_top-group_desc-group_user-name">Осмонова Нурай</span>
                                            <span className="page-comments_blogs-blog_top-group_desc-group_time">/  Около минуты назад</span>
                                        </div>
                                        <p className="page-comments_blogs-blog_top-group_desc-p">Очень понравились уроки. Все более чем понятно! </p>
                                        <span className="page-comments_blogs-blog_top-group_desc-answer">Ответить</span>
                                    </div>
                                </div>
                            </div>
                            <div className="page-comments_blogs-blog">
                                <div className="page-comments_blogs-blog_top-group">
                                    <div className="page-comments_blogs-blog_top-group_bg">
                                        <div>
                                            <span className="user-letter">K</span>
                                        </div>
                                    </div>
                                    <div className="page-comments_blogs-blog_top-group_desc">
                                        <div className="page-comments_blogs-blog_top-group_desc-group">
                                            <span className="page-comments_blogs-blog_top-group_desc-group_user-name">Эгембердиева Кунсулуу</span>
                                            <span className="page-comments_blogs-blog_top-group_desc-group_time">/  24.10.2021</span>
                                        </div>
                                        <p className="page-comments_blogs-blog_top-group_desc-p">Классный урок, первый раз вижу такое подробное объяснение всего происходящего</p>
                                        <span className="page-comments_blogs-blog_top-group_desc-answer">Ответить</span>
                                    </div>
                                </div>
                            </div>
                            <div className="page-comments_blogs-blog">
                                <div className="page-comments_blogs-blog_top-group">
                                    <div className="page-comments_blogs-blog_top-group_bg">
                                        <div>
                                            <span className="user-letter">T</span>
                                        </div>
                                    </div>
                                    <div className="page-comments_blogs-blog_top-group_desc">
                                        <div className="page-comments_blogs-blog_top-group_desc-group">
                                            <span className="page-comments_blogs-blog_top-group_desc-group_user-name">Таалай Бирдемке</span>
                                            <span className="page-comments_blogs-blog_top-group_desc-group_time">/  24.10.2021</span>
                                        </div>
                                        <p className="page-comments_blogs-blog_top-group_desc-p">Как мне кажется,  в конце видео, необходимо было сказать о том, что информация - это то(в данном случае число) с помощью чего можно устранить некую неопределенность(неизвестность) А так вроде все замечательно.</p>
                                        <span className="page-comments_blogs-blog_top-group_desc-answer">Ответить</span>
                                    </div>
                                </div>
                                <div className="page-comments_blogs-blog_btm-group">
                                    <div className="page-comments_blogs-blog_btm-group_bg">
                                        <div>
                                            <span className="under-user-letter">T</span>
                                        </div>
                                    </div>
                                    <div className="page-comments_blogs-blog_btm-group_desc">
                                        <div className="page-comments_blogs-blog_btm-group_desc-group">
                                            <span className="page-comments_blogs-blog_btm-group_desc-group_user-name">Таалай Бирдемке</span>
                                            <span className="page-comments_blogs-blog_btm-group_desc-group_time">/  24.10.2021</span>
                                        </div>
                                        <p className="page-comments_blogs-blog_btm-group_desc-p">Как мне кажется,  в конце видео, необходимо было сказать о том, что информация - это то(в данном случае число) с помощью чего можно устранить некую неопределенность(неизвестность) А так вроде все замечательно.</p>
                                        <span className="page-comments_blogs-blog_btm-group_desc-answer">Ответить</span>
                                    </div>
                                </div>
                            </div>
                            <div className="page-comments_blogs-blog">
                                <div className="page-comments_blogs-blog_top-group">
                                    <div className="page-comments_blogs-blog_top-group_bg">
                                        <div>
                                            {/*<img src={User_image} alt=""/>*/}
                                        </div>
                                    </div>
                                    <div className="page-comments_blogs-blog_top-group_desc">
                                        <div className="page-comments_blogs-blog_top-group_desc-group">
                                            <span className="page-comments_blogs-blog_top-group_desc-group_user-name">Осмонова Нурай</span>
                                            <span className="page-comments_blogs-blog_top-group_desc-group_time">/  Около минуты назад</span>
                                        </div>
                                        <p className="page-comments_blogs-blog_top-group_desc-p">Мой первый день в мире программирования ✨ Первый ролик 😊 Вы просто гениально объясняете, продолжаю смотреть 😉  Спасибо!</p>
                                        <span className="page-comments_blogs-blog_top-group_desc-answer">Ответить</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="page-comments_btn">Смотреть все</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PageComments;