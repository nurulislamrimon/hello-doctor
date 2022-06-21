import React from 'react';

const GradientBtn = ({ children, disabled }) => {
    return (

        <button className="btn bg-gradient-to-r from-secondary to-primary text-base-100 border-none">{children}</button>
    );
};

export default GradientBtn;