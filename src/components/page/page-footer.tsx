import React from 'react';

import { ScreenBlock, ScreenBlockAlign } from 'components/page/page-block';

interface ScreenFooterProps {
    children: React.ReactNode;
}

export const ScreenFooter: React.FunctionComponent<ScreenFooterProps> = ({
    children,
}) => (
    <ScreenBlock
        align={ScreenBlockAlign.BOTTOM}
        hPadded={false}
        qaRole={'screen-footer'}
    >
        {children}
    </ScreenBlock>
);