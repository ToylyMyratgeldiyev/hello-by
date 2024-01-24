import React from 'react';
import styles from './GreenBlock.module.css'
import Tonnel from "../tonnel/Tonnel";
import Car from '../../img/car.png'


const GreenBlock = () => {
    return (
        <div className={styles.main}>

            <div className={styles.road}>
                <div className={styles.car}>
                    <img src={Car} alt=""/>
                </div>
            </div>
            <Tonnel />
        </div>
    );
};

export default GreenBlock;
