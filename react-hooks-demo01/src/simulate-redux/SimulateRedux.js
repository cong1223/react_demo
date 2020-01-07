import React, {useContext} from 'react';
import Buttons from "./Buttons";
import ShowArea from "./ShowArea";
import {Color} from '../Color'

function SimulateRedux(props) {
    return (
        <div>
            <Color>
                <ShowArea />
                <Buttons />
            </Color>
        </div>
    );
}

export default SimulateRedux;
