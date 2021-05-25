import React, { useContext } from 'react';

import cx from 'classnames';
import * as styles from './page.module.scss';

export enum PageBlockAlign {
    TOP,
    CENTER,
    BOTTOM,
    STRETCH,
}

const mapPageBlockAlignToClassnames: { [key in PageBlockAlign]: string } = {
    [PageBlockAlign.TOP]: styles.blockAlignTop,
    [PageBlockAlign.CENTER]: styles.blockAlignCenter,
    [PageBlockAlign.BOTTOM]: styles.blockAlignBottom,
    [PageBlockAlign.STRETCH]: styles.blockAlignStretch,
};

interface PageBlockProps {
    align: PageBlockAlign;
    vPadded?: boolean;
    hPadded?: boolean;
    limited?: boolean;
    sticky?: boolean;
    stickyPosition?: string;
    qaRole?: string;
}

export const PageBlock: React.FunctionComponent<PageBlockProps> = ({
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
                mapPageBlockAlignToClassnames[align],
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
