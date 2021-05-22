import React, { useState } from 'react';
import Card from './Card';
import styles from './CardList.module.sass'


const CardList = (props) => {

    const {cardQuantity, listLabel} = props

    const [selected, setSelected] = useState(null);

    const handleClick = (key) => {
        setSelected (key);
    };

    const listGenerator = () => {
        const list = Array.from({ length: cardQuantity }, (v, k) => ++k)
        return list.map((c,i)=> <Card onClick={handleClick} key={i} pass={c} active={c === selected ? 1 : 0} />);
    };

    return (
        <>
            <div className={styles.listLabel}>{listLabel}</div>
            <div className={styles.cardList}>
                {listGenerator()}
            </div>
        </>
    );
}

export default CardList;

