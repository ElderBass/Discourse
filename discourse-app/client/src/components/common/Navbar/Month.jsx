import React from 'react';
import styles from './Month.module.css';

const Month = (props) => {
    const monthName = props.month;
    const isEven = props.isEven;
    const monthContainerClasses = isEven 
        ? `${styles.isEven} + ${styles.monthContainer}`
        : styles.monthContainer;

    return (
        <div className={monthContainerClasses}>
            <p className={styles.monthName}>
                {monthName}
            </p>
        </div>
    );
}


export default Month;