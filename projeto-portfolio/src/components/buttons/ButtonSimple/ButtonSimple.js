import React from 'react';
import '../../../variables/Colors.css';
import './ButtonSimple.css';

const ButtonSimple = ({width, height, text, href, alt}) => {
    return (
        <a href={href} className="button-simple" style={{ width, height }}>{text}</a>
    );
};

export default ButtonSimple;
