import React from 'react';
import { Helmet } from 'react-helmet';

import { Screen, ScreenContent } from 'components/screen';

// markup
const IndexPage = () => {
    return (
        <>
            <Helmet title="Home" />
            <Screen>
                <ScreenContent vPadded={true} hPadded={true} limited={true}>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quae et iusto aut eveniet labore quam rerum
                        possimus explicabo, beatae doloribus dolores. Laboriosam
                        consectetur, sapiente consequuntur velit illum corrupti?
                        Fugit, sunt.
                    </p>
                </ScreenContent>
            </Screen>
        </>
    );
};

export default IndexPage;
