import React from 'react';
import cx from 'classnames';
import { Link } from 'gatsby';
import * as styles from './menu.module.scss';

type MenuProps = {
    location?: Location;
};

type Item = {
    title: string;
    hint?: string;
    href: string;
};

const ITEMS: Item[] = [
    {
        title: 'Page 1',
        href: '/page1/',
    },
];

const isCurrent = (url = '', href: string) =>
    url === href || url.startsWith(href);

export const Menu: React.FunctionComponent<MenuProps> = ({ location }) => {
    return (
        <div className={styles.menu}>
            {ITEMS.map(({ title, hint, href }) => (
                <div
                    className={cx(
                        styles.link,
                        isCurrent(location?.pathname, href) && styles.isActive
                    )}
                    key={href}
                >
                    <Link to={href} title={hint} aria-label={hint}>
                        {title}
                    </Link>
                </div>
            ))}
        </div>
    );
};
