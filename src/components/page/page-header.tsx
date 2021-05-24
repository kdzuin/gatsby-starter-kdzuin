import React from 'react';

import { ScreenBlock, ScreenBlockAlign } from 'components/page/page-block';

interface ScreenHeaderProps {
    children: React.ReactNode;
}

export const ScreenHeader: React.FunctionComponent<ScreenHeaderProps> = ({
    children,
}) => (
    <ScreenBlock
        align={ScreenBlockAlign.TOP}
        sticky={true}
        stickyPosition={'0'}
    >
        <ScreenBlock
            align={ScreenBlockAlign.TOP}
            hPadded={true}
            qaRole={'page-header'}
        >
            {children}
        </ScreenBlock>
    </ScreenBlock>
);
