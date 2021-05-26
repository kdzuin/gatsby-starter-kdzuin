import React from 'react';
import { Helmet } from 'react-helmet';
import { PageContent } from 'components/page';

export default () => {
    return (
        <>
            <Helmet title="Home" />
            <PageContent vPadded hPadded limited>
                <h1>Page title</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quae et iusto aut eveniet labore quam rerum possimus
                    explicabo, beatae doloribus dolores. Laboriosam consectetur,
                    sapiente consequuntur velit illum corrupti? Fugit, sunt.
                </p>
            </PageContent>
        </>
    );
};
