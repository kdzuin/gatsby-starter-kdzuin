import React from 'react';

import { ScreenBlock, ScreenBlockAlign } from 'components/screen/screen-block';

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
            qaRole={'screen-header'}
        >
            {children}
        </ScreenBlock>
    </ScreenBlock>
);
