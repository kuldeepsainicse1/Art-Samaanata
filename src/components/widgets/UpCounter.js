import React from "react";
import AnimatedNumber from 'react-animated-number';


// const export UpCounter = ({ bigValue }) => (
function UpCounter({ bigValue }){
    console.info("hi");
    console.info(bigValue);

    var formatValue = value => `${Number(value).toFixed(0)}`;
    return(
        <>
        <AnimatedNumber component="number" value={bigValue}
            style={{
                transition: '0.1s ease-out',
                fontSize: 20,
                transitionProperty:
                    'background-color, color, opacity'
            }}
            // frameStyle={perc => (
            //     perc === 100 ? {} : {}
            // )}
            
            formatValue={formatValue}
            duration={1500} />
            {/* formatValue={n => prettyBytes(n)}/> */}
        </>
    );
}

export default UpCounter;