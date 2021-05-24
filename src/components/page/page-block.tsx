import React, { useContext } from 'react';

import cx from 'classnames';
import * as styles from './page.module.scss';

export enum ScreenBlockAlign {
    TOP,
    CENTER,
    BOTTOM,
    STRETCH,
}

const mapScreenBlockAlignToClassnames: { [key in ScreenBlockAlign]: string } = {
    [ScreenBlockAlign.TOP]: styles.blockAlignTop,
    [ScreenBlockAlign.CENTER]: styles.blockAlignCenter,
    [ScreenBlockAlign.BOTTOM]: styles.blockAlignBottom,
    [ScreenBlockAlign.STRETCH]: styles.blockAlignStretch,
};

interface ScreenBlockProps {
    align: ScreenBlockAlign;
    vPadded?: boolean;
    hPadded?: boolean;
    limited?: boolean;
    sticky?: boolean;
    stickyPosition?: string;
    qaRole?: string;
}

export const ScreenBlock: React.FunctionComponent<ScreenBlockProps> = ({
    align,
    vPadded,
    hPadded,
    limited,
    sticky,
    stickyPosition,
    children,
    qaRole = 'page-block',
}) => {
    return (
        <div
            className={cx(
                styles.block,
                mapScreenBlockAlignToClassnames[align],
                hPadded && styles.blockPaddingHorizontal,
                vPadded && styles.blockPaddingVertical,
                limited && styles.blockWidthLimited,
                sticky && styles.blockSticky
            )}
            style={
                sticky && stickyPosition ? { top: stickyPosition } : undefined
            }
            data-qa={qaRole}
        >
            {children}
        </div>
    );
};
