import React from 'react';
import PageHero from "./Page-Hero/Page-Hero";
import PageText from "./Page-text/Page-text";
import PageComments from "./Page-comments/Page-comments";
import PageArticles from "./Page-articles/Page-articles";

const HomePage = () => {
    return (
        <div>
            <PageHero/>
            <PageText/>
            <PageComments/>
            <PageArticles/>
        </div>
    );
};

export default HomePage;