import React from 'react';

const MyContainer = ({children, className}) => {
    return (
        <div className={`${className} w-[90%] mx-auto`}>
            {children}
        </div>
    );
};

export default MyContainer;