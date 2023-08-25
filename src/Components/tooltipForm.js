import React, { useState } from 'react';
import './toolForm.css';

const TooltipForm = ({ onTooltipSubmit }) => {
    const [selectedElement, setSelectedElement] = useState('button3');
    const [tooltipText, setTooltipText] = useState('');
    const [tooltipSize, settooltipSize] = useState('');
    const [padding, setpadding] = useState('3');
    const [textColour, settextColour] = useState('');
    const [background, setbackground] = useState('');
    const [cornerRadius, setcornerRadius] = useState('3');
    const [tooltipWidth, settooltipWidth] = useState('');
    const [arrowWidth, setarrowWidth] = useState('3');
    const [arrowHeigth, setarrowHeigth] = useState('3');

    const handleSubmit = (e) => {
        e.preventDefault();
        onTooltipSubmit(selectedElement, tooltipText, tooltipSize, padding, textColour, background, cornerRadius, tooltipWidth, arrowWidth, arrowHeigth);
    };
    const handleInputChange = (e, setStateFunction) => {
        setStateFunction(e.target.value);
    };

    const container = {
        margin: '25px 0',
        padding: '30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '250px',
        width: '300px', 
        fontSize: '12px',
        background: '#F5F5F5',
        borderRadius: '23px',
    }

    return (
        <div style={container}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="target">Target Element</label><br></br>
                    <select id="target" value={selectedElement} onChange={(e) => setSelectedElement(e.target.value)}>
                        <option value="button1">Button 1</option>
                        <option value="button2">Button 2</option>
                        <option value="button3">Button 3</option>
                        <option value="button4">Button 4</option>
                        <option value="button5">Button 5</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="tooltipText" >Tooltip text</label><br></br>
                    <input type="text" placeholder='Input' id="textLabel" value={tooltipText} onChange={(e) => setTooltipText(e.target.value)} />
                </div>
                <div className='dimensions'>
                    <div>
                        <label htmlFor="tooltipSize">Text Size</label>
                        <input type="text" id="toolStyle" value={tooltipSize} onInput={(e) => handleInputChange(e, settooltipSize)} />
                    </div>
                    <div className='setPadding'>
                        <label htmlFor="padding">Padding </label>
                        <input type="text" id="toolStyle" value={padding} onChange={(e) => setpadding(e.target.value)} />
                    </div>
                </div>
                <div>
                    <label htmlFor="textColour">Text Colour</label><br></br>
                    <input type="text" id="textLabel" placeholder='Input' value={textColour} onChange={(e) => settextColour(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="background">Background colour</label><br></br>
                    <input type="text" id="textLabel" placeholder='Input' value={background} onChange={(e) => setbackground(e.target.value)} />
                </div>
                <div className='dimensions'>
                    <div>
                        <label htmlFor="cornerRadius">Corner radius</label>
                        <input type="text" id="tooltipSize" value={cornerRadius} onChange={(e) => setcornerRadius(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="tooltipWidth">Tooltip width</label>
                        <input type="text" id="tooltipSize" value={tooltipWidth} onChange={(e) => settooltipWidth(e.target.value)} />
                    </div>
                </div>
                <div className='dimensions'>
                    <div>
                        <label htmlFor="arrowWidth">Arrow width</label>
                        <input type="text" id="tooltipSize1" value={arrowWidth} onChange={(e) => setarrowWidth(e.target.value)} />
                    </div>
                    <div className='setArrow'>
                        <label htmlFor="arrowHeigth">Arrow height</label>
                        <input type="text" id="tooltipSize" value={arrowHeigth} onChange={(e) => setarrowHeigth(e.target.value)} />
                    </div>
                </div>
                <div className='buttonStyle'>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};
export default TooltipForm;

