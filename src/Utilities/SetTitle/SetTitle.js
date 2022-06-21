import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const SetTitle = ({ children }) => {
    return (
        useEffect(() => {
            <Helmet>
                <title>Hello Doctors - {children}</title>
            </Helmet>
        }, [children])
    );
};

export default SetTitle;