import React from 'react';
import PageHeroImg from './../../../../image/home4.png';

const PageHero = () => {
    return (
        <>
            <div id="page-hero">
                <div className="container">
                    <div className="page-hero">
                        <div className="page-hero_links">
                            <span>Главная</span>/
                            <span>Статья</span>/
                            <span>Мы подготовили...</span>
                        </div>
                        <span className="page-hero_date">11.09.2022</span>
                        <h1 className="page-hero_title">Мы подготовили подборку самых популярных курсов  по направлению Java в IBS Training Center.</h1>
                        <p className="page-hero_parag">Когда-то ни один крупный проект не обходился без применения функционального и асинхронного программирования. Эти подходы до сих пор популярны за счет своих преимуществ: они помогают выдерживать большие нагрузки и писать эффективный код, не теряя в скорости разработки. </p>
                        <div className="page-hero_img">
                            <img src={PageHeroImg} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PageHero;
