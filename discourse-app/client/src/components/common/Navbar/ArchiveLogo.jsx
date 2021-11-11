import React from 'react';

import styles from './ArchiveLogo.module.css'

const ArchiveLogo = (props) => {

    return (
        <div className={styles.archiveLogo}>
            <h2 className={styles.archiveHeader}>
                Archive
            </h2>
        </div>

    );
}

export default ArchiveLogo;