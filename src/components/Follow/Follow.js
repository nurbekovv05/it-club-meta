import React from 'react';
import {NavLink} from "react-router-dom";

const Follow = () => {
    return (

        <div className="container">
            <div style={{paddingTop:'200px'}}>

                <NavLink to={"/Profile"}>Profile</NavLink>

            </div>
        </div>
    );
};

export default Follow;