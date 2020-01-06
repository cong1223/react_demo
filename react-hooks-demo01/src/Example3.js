import React, {useState, useEffect, createContext, useContext} from 'react';

const CountContext = createContext();

function Counter() {
    const count = useContext(CountContext)
    return (
        <h2>计数器的值:{count}</h2>
    );
}

function Example3(){
    const [ count , setCount ] = useState(0);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>click me</button>
            <CountContext.Provider value={count}>
                <Counter />
            </CountContext.Provider>
        </div>
    )
}
export default Example3;