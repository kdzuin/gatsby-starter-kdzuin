import React from 'react';
import { Page, PageHeader, PageContent, PageFooter } from 'components/page';

export default {
    title: 'UI/Page',
    component: Page,
    subcomponents: {
        ScreenContent: PageContent,
        ScreenHeader: PageHeader,
        ScreenFooter: PageFooter,
    },
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
    <Page>
        <PageHeader>
            <Placeholder>ScreenHeader</Placeholder>
        </PageHeader>
        <PageContent>
            <Placeholder>ScreenContent</Placeholder>
        </PageContent>
        <PageContent>
            <Placeholder>ScreenContent</Placeholder>
        </PageContent>
        <PageFooter>
            <Placeholder>ScreenFooter</Placeholder>
        </PageFooter>
    </Page>
);

export const LongPage = () => (
    <Page>
        <PageHeader>
            <Placeholder>ScreenHeader</Placeholder>
        </PageHeader>
        <PageContent>
            <Placeholder height={800}>ScreenContent</Placeholder>
        </PageContent>
        <PageContent>
            <Placeholder height={800}>ScreenContent</Placeholder>
        </PageContent>
        <PageFooter>
            <Placeholder>ScreenFooter</Placeholder>
        </PageFooter>
    </Page>
);

export const PaddedContentBlocks = () => (
    <Page>
        <PageHeader>
            <Placeholder>ScreenHeader</Placeholder>
        </PageHeader>
        <PageContent hPadded>
            <Placeholder height={300}>ScreenContent</Placeholder>
        </PageContent>
        <PageContent hPadded vPadded>
            <Placeholder height={300}>ScreenContent</Placeholder>
        </PageContent>
        <PageFooter>
            <Placeholder>ScreenFooter</Placeholder>
        </PageFooter>
    </Page>
);

export const PaddedAndLimitedBlocks = () => (
    <Page>
        <PageHeader>
            <Placeholder>ScreenHeader</Placeholder>
        </PageHeader>
        <PageContent hPadded limited>
            <Placeholder height={300}>ScreenContent</Placeholder>
        </PageContent>
        <PageContent hPadded vPadded limited>
            <Placeholder height={300}>ScreenContent</Placeholder>
        </PageContent>
        <PageFooter>
            <Placeholder>ScreenFooter</Placeholder>
        </PageFooter>
    </Page>
);
