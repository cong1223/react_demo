import React, {useReducer} from 'react';

function ReducerDemo(props) {
    const [count,dispatch] = useReducer((state,action) => {
        switch (action) {
            case 'add':
                return state + 1;
            case 'sub':
                return state - 1;
            default:
                return state;
        }
    },0)
    return (
        <div>
            <h2>现在的分数是:{count}</h2>
            <div><button onClick={() => dispatch('add')}>add</button></div>
            <div><button onClick={() => dispatch('sub')}>sub</button></div>
        </div>
    );
}

export default ReducerDemo;