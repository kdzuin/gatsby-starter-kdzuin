import { StaticQuery, graphql } from 'gatsby';
import React from 'react';

import * as styles from './footer.module.scss';

interface FooterProps {}

const YEAR = new Date().getFullYear();

export const Footer: React.FunctionComponent<FooterProps> = () => {
    return (
        <StaticQuery
            query={graphql`
                query AuthorInfo {
                    site {
                        siteMetadata {
                            author
                        }
                    }
                }
            `}
            render={({
                site: {
                    siteMetadata: { author },
                },
            }) => (
                <div className={styles.block}>
                    &copy; {author}, {YEAR}
                </div>
            )}
        />
    );
};
