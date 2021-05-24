import React from 'react';

import { ScreenBlock, ScreenBlockAlign } from 'components/page/page-block';

interface ScreenContentProps {
    align?: ScreenBlockAlign;
    hPadded?: boolean;
    vPadded?: boolean;
    limited?: boolean;
    qaRole?: string;
}

export const ScreenContent: React.FunctionComponent<ScreenContentProps> = ({
    align = ScreenBlockAlign.TOP,
    hPadded,
    vPadded,
    limited,
    children,
    qaRole,
}) => (
    <ScreenBlock
        align={align}
        hPadded={hPadded}
        vPadded={vPadded}
        limited={limited}
        qaRole={qaRole}
    >
        {children}
    </ScreenBlock>
);
