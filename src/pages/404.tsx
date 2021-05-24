import React from 'react';
import { Page, PageContent } from 'components/page';
import { Helmet } from 'react-helmet';

// markup
const NotFoundPage = () => {
    return (
        <>
            <Helmet title="Not Found" />
            <Page>
                <PageContent vPadded={true} hPadded={true} limited={true}>
                    <h1>Page not found</h1>
                    <p>Sorry we couldn’t find what you were looking for.</p>
                </PageContent>
            </Page>
        </>
    );
};

export default NotFoundPage;
