import React from 'react';
import { Helmet } from 'react-helmet';
import { Page, PageFooter, PageHeader } from 'components/page';
import { Header } from 'components/header';
import { Footer } from 'components/footer';

import 'styles/base.scss';
import { graphql, StaticQuery } from 'gatsby';

interface AppLayoutProps {
    location?: Location;
}

const AppLayout: React.FunctionComponent<AppLayoutProps> = ({
    children,
    location,
}) => {
    return (
        <StaticQuery
            query={graphql`
                query SiteTitleQuery {
                    site {
                        siteMetadata {
                            lang
                            title
                            titleTemplate
                            description
                        }
                    }
                }
            `}
            render={({
                site: {
                    siteMetadata: { lang, title, titleTemplate, description },
                },
            }) => (
                <>
                    <Helmet defaultTitle={title} titleTemplate={titleTemplate}>
                        <html lang={lang} />
                        <meta name="description" content={description} />
                        <link
                            rel="dns-prefetch"
                            href="//fonts.googleapis.com"
                        ></link>
                        <link
                            rel="preconnect"
                            href="https://fonts.gstatic.com/"
                            crossOrigin={'crossorigin'}
                        ></link>
                        <link
                            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap"
                            rel="stylesheet"
                        ></link>
                    </Helmet>

                    <Page>
                        <PageHeader>
                            <Header location={location} />
                        </PageHeader>
                        {children}
                        <PageFooter>
                            <Footer />
                        </PageFooter>
                    </Page>
                </>
            )}
        />
    );
};

export default AppLayout;
