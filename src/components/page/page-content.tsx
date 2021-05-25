import React from 'react';

import { PageBlock, PageBlockAlign } from 'components/page/page-block';

interface PageContentProps {
    align?: PageBlockAlign;
    hPadded?: boolean;
    vPadded?: boolean;
    limited?: boolean;
    qaRole?: string;
}

export const PageContent: React.FunctionComponent<PageContentProps> = ({
    align = PageBlockAlign.TOP,
    hPadded,
    vPadded,
    limited,
    children,
    qaRole,
}) => (
    <PageBlock
        align={align}
        hPadded={hPadded}
        vPadded={vPadded}
        limited={limited}
        qaRole={qaRole}
    >
        {children}
    </PageBlock>
);
