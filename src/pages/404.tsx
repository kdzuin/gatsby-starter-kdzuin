import React from 'react';
import { PageContent } from 'components/page';
import { Helmet } from 'react-helmet';

export default () => {
    return (
        <>
            <Helmet title="Not Found" />
            <PageContent vPadded={true} hPadded={true} limited={true}>
                <h1>Page not found</h1>
                <p>Sorry we couldn’t find what you were looking for.</p>
            </PageContent>
        </>
    );
};
