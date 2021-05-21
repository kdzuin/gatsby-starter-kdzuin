import React from 'react';
import {
    Screen,
    ScreenHeader,
    ScreenContent,
    ScreenFooter,
} from 'components/screen';

export default {
    title: 'UI/Screen',
    component: Screen,
    subcomponents: { ScreenContent, ScreenHeader, ScreenFooter },
    parameters: { docs: { inlineStories: false } },
};

const Placeholder: React.FunctionComponent<{ height?: number }> = ({
    children,
    height,
}) => (
    <div
        style={{
            height,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
            backgroundColor: '#ccc',
            color: '#000',
            textAlign: 'center',
            border: '1px solid #aaa',
        }}
    >
        {children}
    </div>
);

export const Default = () => (
    <Screen>
        <ScreenHeader>
            <Placeholder>ScreenHeader</Placeholder>
        </ScreenHeader>
        <ScreenContent>
            <Placeholder>ScreenContent</Placeholder>
        </ScreenContent>
        <ScreenContent>
            <Placeholder>ScreenContent</Placeholder>
        </ScreenContent>
        <ScreenFooter>
            <Placeholder>ScreenFooter</Placeholder>
        </ScreenFooter>
    </Screen>
);

export const LongPage = () => (
    <Screen>
        <ScreenHeader>
            <Placeholder>ScreenHeader</Placeholder>
        </ScreenHeader>
        <ScreenContent>
            <Placeholder height={800}>ScreenContent</Placeholder>
        </ScreenContent>
        <ScreenContent>
            <Placeholder height={800}>ScreenContent</Placeholder>
        </ScreenContent>
        <ScreenFooter>
            <Placeholder>ScreenFooter</Placeholder>
        </ScreenFooter>
    </Screen>
);

export const PaddedContentBlocks = () => (
    <Screen>
        <ScreenHeader>
            <Placeholder>ScreenHeader</Placeholder>
        </ScreenHeader>
        <ScreenContent hPadded={true}>
            <Placeholder height={300}>ScreenContent</Placeholder>
        </ScreenContent>
        <ScreenContent hPadded={true} vPadded={true}>
            <Placeholder height={300}>ScreenContent</Placeholder>
        </ScreenContent>
        <ScreenFooter>
            <Placeholder>ScreenFooter</Placeholder>
        </ScreenFooter>
    </Screen>
);

export const PaddedAndLimitedBlocks = () => (
    <Screen>
        <ScreenHeader>
            <Placeholder>ScreenHeader</Placeholder>
        </ScreenHeader>
        <ScreenContent hPadded={true} limited={true}>
            <Placeholder height={300}>ScreenContent</Placeholder>
        </ScreenContent>
        <ScreenContent hPadded={true} vPadded={true} limited={true}>
            <Placeholder height={300}>ScreenContent</Placeholder>
        </ScreenContent>
        <ScreenFooter>
            <Placeholder>ScreenFooter</Placeholder>
        </ScreenFooter>
    </Screen>
);
