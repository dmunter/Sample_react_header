import React, { useState } from 'react';
import { Button } from './Button';

const Practice = (obj) => {
    const x = '25';
    return(
        <div buttonStyle = 'btn--outline'>
             <h1> ( obj )  this is jsx syntax {x} </h1>            
        </div>      
    )
}

export default Practice;