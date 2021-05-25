import React from 'react';

import { PageBlock, PageBlockAlign } from 'components/page/page-block';

interface PageFooterProps {
    children: React.ReactNode;
}

export const PageFooter: React.FunctionComponent<PageFooterProps> = ({
    children,
}) => (
    <PageBlock
        align={PageBlockAlign.BOTTOM}
        hPadded={true}
        limited={true}
        qaRole={'page-footer'}
    >
        {children}
    </PageBlock>
);
