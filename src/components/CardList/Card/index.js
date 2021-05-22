import React, { useState } from 'react';
import styles from './Card.module.sass'
import classNames from 'classnames';
import CONSTANTS from '../../../CONSTANTS';


const Card = (props) => {

    const {active, onClick, pass} = props;

    const [count, setCount] = useState(0);
    const [color, setColor] = useState(CONSTANTS.BCOLORS[0]);

    const cxCard = classNames({
        [styles.cardListItem]: true,
        [styles.selectedItem]: active,
    });

    const increment = () => {
        let index = CONSTANTS.BCOLORS.indexOf(color);
        setCount(count+1);
        setColor(index < CONSTANTS.BCOLORS.length-1 ? CONSTANTS.BCOLORS[++index] : CONSTANTS.BCOLORS[0]);
    };

    const decrement = () => {
        setCount(count > 0 ? count-1 : 0)
        let index = CONSTANTS.BCOLORS.indexOf(color);
        setColor(index > 0 && count  > 0 ? CONSTANTS.BCOLORS[--index] : count !== 0 ? CONSTANTS.BCOLORS[CONSTANTS.BCOLORS.length-1+index] : CONSTANTS.BCOLORS[0]);
    };

    return (
        <div className={cxCard} onClick={()=>onClick(pass)}>
            <div>
                <div>Card <span>{pass}</span></div>
                <div>Count: <span>{count}</span></div>
            </div>
            <div className={styles.label} style={{backgroundColor: `${color}`}}></div>
            <div className={styles.btnGroup}>
                <button name="minusBtn" onClick={decrement}>minus</button>
                <button name="plusBtn" onClick={increment}>plus</button>
            </div>
        </div>
    );
}


export default Card;