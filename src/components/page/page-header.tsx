import React from 'react';

import { PageBlock, PageBlockAlign } from 'components/page/page-block';

interface PageHeaderProps {
    children: React.ReactNode;
}

export const PageHeader: React.FunctionComponent<PageHeaderProps> = ({
    children,
}) => (
    <PageBlock
        align={PageBlockAlign.top}
        hPadded
        limited
        qaRole={'page-header'}
    >
        {children}
    </PageBlock>
);
