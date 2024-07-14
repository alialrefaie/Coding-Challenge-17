import React from 'react';

function FancyText({ title, text}) {
    const style = title ? {fontWeight: 'bold', fontSize: '24px' } : {fontSize: '16px' };
    return <div style={style}>{text}</div>;
}

export default FancyText;