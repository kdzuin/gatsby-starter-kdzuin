import React, { useContext } from 'react';
import * as styles from './page.module.scss';

interface ScreenProps {
    children: React.ReactNode;
    qaRole?: string;
}

export const Screen: React.FunctionComponent<ScreenProps> = ({
    children,
    qaRole = 'screen',
}) => {
    return (
        <div className={styles.screen} data-qa={qaRole}>
            {children}
        </div>
    );
};
