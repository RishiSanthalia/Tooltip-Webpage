import React, { useState } from 'react';
import './App.css';
import TooltipForm from './Components/tooltipForm';
import TooltipDisplay from './Components/tooltipDisplay';

function App() {
  const [selectedElement, setSelectedElement] = useState('');
  const [tooltipText, setTooltipText] = useState('');
  const [tooltipSize, settooltipSize] = useState('');
  const [padding, setpadding] = useState('');
  const [textColour, settextColour] = useState('');
  const [background, setbackground] = useState('');
  const [cornerRadius, setcornerRadius] = useState('');
  const [tooltipWidth, settooltipWidth] = useState('');
  const [arrowWidth, setarrowWidth] = useState('');
  const [arrowHeigth, setarrowHeigth] = useState('');

  const handleTooltipSubmit = (element, text, size, padding, colour, background, cornerRadius, tooltipWidth, arrowWidth, arrowHeigth) => {
    setSelectedElement(element);
    setTooltipText(text);
    settooltipSize(size);
    setpadding(padding);
    settextColour(colour);
    setbackground(background);
    setcornerRadius(cornerRadius);
    settooltipWidth(tooltipWidth);
    setarrowWidth(arrowWidth);
    setarrowHeigth(arrowHeigth);
  };

  return (
    <div className="App">
      <div className="left-panel">
        <TooltipForm onTooltipSubmit={handleTooltipSubmit} />
      </div>
      <div className="right-panel">
        <TooltipDisplay selectedElement={selectedElement} tooltipText={tooltipText} tooltipSize={tooltipSize} padding={padding} textColour={textColour}
          background={background} cornerRadius={cornerRadius} tooltipWidth={tooltipWidth} arrowWidth={arrowWidth} arrowHeigth={arrowHeigth} />
      </div>
    </div>
  );
}

export default App;
