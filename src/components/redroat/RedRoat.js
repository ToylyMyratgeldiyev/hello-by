import React from 'react';
import styles from './RedRoat.module.css'
import Tonnel from "../tonnel/Tonnel";
import TonnelRotate from "../tonnel_rotate/TonnelRotate";

const RedRoad = () => {
    return (
        <div className={styles.main}>
                <TonnelRotate />
            <div className={styles.road}>
            </div>
                <Tonnel />
        </div>
    );
};

export default RedRoad;
