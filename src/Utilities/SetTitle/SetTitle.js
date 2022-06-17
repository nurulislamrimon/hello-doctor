import React from 'react';
import { Helmet } from 'react-helmet';

const SetTitle = ({ children }) => {
    return (
        <Helmet>
            <title>Hello Doctors - {children}</title>
        </Helmet>
    );
};

export default SetTitle;