import React from 'react';
import Homehero from "./Home-hero/Homehero";
import Home_statya from "./Home-statya/Home_statya";
import HomeSubscribe from "./Home-subscribe/Home_subscribe";
import HomeAccordion from "./Home-accordion/Home_accordion";
import HomeForm from "./Home-form/Home_form";

const Home = () => {
    return (
        <>
            <Homehero/>
            <Home_statya/>
            <HomeSubscribe/>
            <HomeAccordion/>
            <HomeForm/>
        </>

    );
};

export default Home;