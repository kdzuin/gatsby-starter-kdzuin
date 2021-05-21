import React from 'react';
import { Screen, ScreenContent } from 'components/screen';
import { Helmet } from 'react-helmet';

// markup
const NotFoundPage = () => {
    return (
        <>
            <Helmet title="Not Found" />
            <Screen>
                <ScreenContent vPadded={true} hPadded={true} limited={true}>
                    <h1>Page not found</h1>
                    <p>Sorry we couldn’t find what you were looking for.</p>
                </ScreenContent>
            </Screen>
        </>
    );
};

export default NotFoundPage;
