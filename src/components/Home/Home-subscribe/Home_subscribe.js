import React from 'react';

const HomeSubscribe = () => {
    return (
        <>
            <div id="home-subscribe">
                <div className="container">
                    <div className="home-subscribe">
                        <div className="home-subscribe_blog">
                            <div className="home-subscribe_blog-desc">
                                <h1>Подпишитесь сейчас за 19,00 $ / мес</h1>
                                <p>И получите доступ к материалам и кейсам, а также к новым мастер-классам </p>
                            </div>
                            <div className="home-subscribe_blog-buttons">
                                <button className="home-subscribe_blog-buttons_first">Оформить подписку</button>
                                <button className="home-subscribe_blog-buttons_second">Подробнее о пакетах </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeSubscribe;