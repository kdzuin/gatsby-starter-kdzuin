import React from 'react';

import { PageBlock, PageBlockAlign } from 'components/page/page-block';

interface PageFooterProps {
    children: React.ReactNode;
}

export const PageFooter: React.FunctionComponent<PageFooterProps> = ({
    children,
}) => (
    <PageBlock
        align={PageBlockAlign.bottom}
        hPadded
        limited
        qaRole={'page-footer'}
    >
        {children}
    </PageBlock>
);
