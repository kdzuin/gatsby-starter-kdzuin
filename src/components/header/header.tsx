import React from 'react';
import { Link } from 'gatsby';
import { Menu } from 'components/menu';
import * as styles from './header.module.scss';

interface HeaderProps {
    location?: Location;
}

export const Header: React.FunctionComponent<HeaderProps> = ({ location }) => {
    return (
        <div className={styles.block}>
            <div className={styles.siteName}>
                <Link to="/">Gatsby Starter</Link>
            </div>
            <div className={styles.menu}>
                <Menu location={location} />
            </div>
        </div>
    );
};
