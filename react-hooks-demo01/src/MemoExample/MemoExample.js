import React, {createContext, useMemo, useState} from 'react';

function MemoExample(props) {
    const [peoppleA,setPeoppleA] = useState('peoppleA在等待状态...')
    const [peoppleB,setPeoppleB] = useState('peoppleB在等待状态...')
    return (
        <div>
            <button onClick={() => {setPeoppleA(new Date().getTime().toString())}}>召唤A</button>
            <button onClick={() => {setPeoppleB(new Date().getTime() + 'peoppleB向我们走来...')}}>召唤B</button>
            <ChildComponent name={peoppleA}>{peoppleB}</ChildComponent>
        </div>
    );
}

function ChildComponent({name,children}) {
    function changeA(name) {
        console.log('peoppleA走过来了...')
        return name + 'peoppleA向我们走来了...'
    }
    const actionA = useMemo(() => changeA(name),[name]);
    return (
        <div>
            <p>{children}</p>
            <p>{actionA}</p>
        </div>
    );
}

export default MemoExample;

