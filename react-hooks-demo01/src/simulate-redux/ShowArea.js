import React, {useContext} from 'react';
import {ColorContext} from '../Color'

function ShowArea(props) {
    const {color} = useContext(ColorContext)
    return (
        <div style={{color: color}}>字体为{color}</div>
    );
}

export default ShowArea;