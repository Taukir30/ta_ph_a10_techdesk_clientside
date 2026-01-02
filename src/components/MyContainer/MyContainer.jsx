import React from 'react';

const MyContainer = ({children, className}) => {
    return (
        <div className={`${className} w-[85%] xl:w-[78%] mx-auto px-2`}>
            {children}
        </div>
    );
};

export default MyContainer;