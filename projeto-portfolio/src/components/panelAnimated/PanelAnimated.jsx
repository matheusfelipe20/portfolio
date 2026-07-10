import React from 'react';
import './PanelAnimated.css';
import useTexts from '../../hooks/useTexts.js';
import iconPanel from '../../assets/icon/iconCode.svg';

const PanelAnimated = ({ speed = 30 }) => {
    const texts = useTexts();

    const TextPanelAnimated = [
        texts.Text_01_PanelAnimated,
        texts.Text_02_PanelAnimated,
        texts.Text_03_PanelAnimated,
        texts.Text_04_PanelAnimated,
        texts.Text_05_PanelAnimated,
        texts.Text_06_PanelAnimated
    ];

    const items = TextPanelAnimated.map((text, index) => (
        <div className="item-panelAnimated" key={index}>
            <span>{text}</span>
            <img src={iconPanel} alt="icon" />
        </div>
    ));

    return (
        <div className="panel-animated-wrapper">
            <div
                className="panel-animated-track"
                style={{
                    animationDuration: `${speed}s`,
                }}
            >
                {items}
                {items}
                {items}
            </div>
        </div>
    );
};

export default PanelAnimated;