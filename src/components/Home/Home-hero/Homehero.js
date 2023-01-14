import React from 'react';
import image from './../../../image/фото.svg'

const Homehero = () => {
    return (
        <>
            <div id="home-hero">
                <div className="home-hero">
                    <div className="home-hero_desc">
                        <h1>IT образовательная платформа </h1>
                        <p>Наша образовательная платформа вам даст необходимые практические знания для адаптации в
                            IT-сфере.</p>
                    </div>
                    <div className="home-hero-img">
                        <img src={image} alt=""/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Homehero;