import React from 'react';

import 'styles/base.scss';

interface AppLayoutProps {}

const AppLayout: React.FunctionComponent<AppLayoutProps> = ({ children }) => {
    return <>{children}</>;
};

export default AppLayout;
