import React from 'react';
import Topbar from '../components/Topbar/Topbar.js';
import classes from './Layout.module.css';


const layout = ({ children }) => {
    return (
        <div className={classes.Wrapper}>
            <div className={classes.Main}>
                <Topbar />
                {children}
            </div>
        </div>
    );
}

export default layout;