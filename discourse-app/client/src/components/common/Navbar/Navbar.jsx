import React from 'react';
import Month from './Month';
import months from './data.js';

import styles from './Navbar.module.css';
import ArchiveLogo from './ArchiveLogo';


const Navbar = (props) => {

    return (
        <div className={styles.navbar}>
            <ArchiveLogo />
            {months.map(month => (
                <Month key={month.name} month={month.name} isEven={month.isEven} />
            ))}
        </div>
    );
}

export default Navbar;