import React from 'react';
import styles from './OrangeBlock.module.css'
import Tonnel from "../tonnel/Tonnel";
import TonnelRotate from "../tonnel_rotate/TonnelRotate";

const OrangeBlock = () => {
    return (
        <div className={styles.main}>
            <div className={styles.road}>
                <TonnelRotate />
                <Tonnel />
            </div>
        </div>
    );
};

export default OrangeBlock;
