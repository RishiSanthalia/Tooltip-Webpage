import React from 'react';
import './tooltipDisplay.css';

const TooltipDisplay = ({ selectedElement, tooltipText, tooltipSize, padding, textColour, background, cornerRadius, tooltipWidth, arrowWidth, arrowHeight }) => {
  const containerStyle = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '500px',
    width: '270px',
    margin: '20px',
    border: '10px solid black',
    borderRadius: '29px',
    background: '#b3b3b3'
  };

  const buttonWrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '90%',
    height: '100%',
    margin: '10px'
  };
  const buttonPlacementStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    height: '30%',
  };
  const tooltipPlacement = {
    alignItems: 'center',
    justifyContent: 'center',
    margin: '3px 0px',
  }
  const tooltipPlacement1 = {
    alignItems: 'center',
    justifyContent: 'center',
    margin: '3px 0px',
  }
  const buttonPlacementStyle1 = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '30%',
  };
  const buttonWrapperStyle1 = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '90%',
    height: '100%',
    alignItems: 'flex-end',
    margin: '10px',
    flexDirection: 'column',
  };
  const buttonWrapperStyle2 = {
    display: 'flex',
    width: '90%',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'column'
  };

  const buttonStyle = {
    border: '0px solid white',
    borderRadius: '4px',
    fontSize: '16px',
    textAlign: 'center',
    width: '30%',
    height: '100%',
    padding: '4px',
  };

  const toolStyle = {
    fontSize: tooltipSize + 'px',
    padding: padding + 'px',
    color: textColour,
    background: background,
    borderRadius: cornerRadius + 'px',
    position: 'relative',
    // width: tooltipWidth + 'px',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '2px 6px',
    border: '1px solid black',
    textAlign: 'center',
    top: '0px'
  };
  const arrowStyle = {
    content: "",
    position: "absolute",
    bottom: "100%",
    left: "50%",
    top: arrowHeight+'px',
    transform: "translateX(-50%)",
    borderWidth: arrowWidth + 'px',
    borderStyle: "solid",
    borderColor: "transparent transparent black transparent",
  }
  const arrowStyle1 = {
    content: "",
    position: "absolute",
    top: "100%",
    left: "50%",
    transform: "translateX(-50%)",
    borderWidth: arrowWidth + 'px',
    borderStyle: "solid",
    borderColor: " black transparent transparent transparent",
  }

  return (
    <div style={containerStyle}>
      <div style={buttonWrapperStyle}>
        <div style={buttonPlacementStyle} >
          <button id="button1" style={{ ...buttonStyle, alignSelf: 'flex-start' }}>
            Button 1
          </button>
          <button id="button2" style={{ ...buttonStyle, alignSelf: 'flex-end' }}>
            Button 2
          </button>
        </div>
      </div>
      <div className='tooltipPlacementX' >
        <div>
        {selectedElement === 'button1' && (
          <div className='tooltiptext' style={toolStyle}>
            <span>{tooltipText}<div style={arrowStyle}></div></span>
          </div>

        )}
        </div>
      </div>
      <div className='tooltipPlacementY'>
        {selectedElement === 'button2' && (
          <div className='tooltiptext' style={toolStyle}>
            <div style={arrowStyle}></div>
            <span>{tooltipText}</span>
          </div>
        )}
      </div>
      <div style={buttonWrapperStyle2}>
        <div style={tooltipPlacement} >
          <br></br>
        </div>
        <div style={buttonPlacementStyle1} >
          <button id="button3" style={{ ...buttonStyle, alignSelf: 'center' }}>
            Button 3
          </button>
        </div>
      </div>
      <div className='tooltipPlacementZ' >
        {selectedElement === 'button3' && (
          <div className='tooltiptext' style={toolStyle}>
            <span>{tooltipText}<div style={arrowStyle}></div></span>
          </div>
        )}
      </div>


      <div className='tooltipPlacementX1'>
        {selectedElement === 'button4' && (
          <div className="tooltiptext1" style={toolStyle}>
            <span>{tooltipText}
            <div style={arrowStyle1}></div>
            </span>
          </div>
        )}
      </div>

      <div className='tooltipPlacementY1'>
        {selectedElement === 'button5' && (
          <div className="tooltiptext1" style={toolStyle}>
            <span>{tooltipText}
            <div style={arrowStyle1}></div>
            </span>
          </div>
        )}
      </div>
      <div style={buttonWrapperStyle1}>
        <div style={tooltipPlacement1}>

        </div>
        <div style={buttonPlacementStyle} >
          <button id="button4" style={{ ...buttonStyle, alignSelf: 'flex-start' }}>
            Button 4
          </button>

          <button id="button5" style={{ ...buttonStyle, alignSelf: 'flex-end' }}>
            Button 5
          </button>

        </div>
      </div>
    </div>
  );
};

export default TooltipDisplay;
