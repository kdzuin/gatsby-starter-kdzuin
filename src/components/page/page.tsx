import React, { useContext } from 'react';
import * as styles from './page.module.scss';

interface PageProps {
    children: React.ReactNode;
    qaRole?: string;
}

export const Page: React.FunctionComponent<PageProps> = ({
    children,
    qaRole = 'page',
}) => {
    return (
        <div className={styles.screen} data-qa={qaRole}>
            {children}
        </div>
    );
};
