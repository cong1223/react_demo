import React, {useEffect, useRef, useState} from 'react';

function Example5(props) {
    const inputEl = useRef(null)
    const onButtonClick=()=>{
        inputEl.current.value=new Date().getTime()
        console.log(inputEl)
    }
    //-----------关键代码--------start
    const [text, setText] = useState('testText')
    const textRef = useRef()

    useEffect(()=>{
        textRef.current = text;
        console.log('textRef.current:', textRef.current)
    },[text])
    //----------关键代码--------------end
    return (
        <>
            {/*保存input的ref到inputEl */}
            <input ref={inputEl} type="text"/>
            <button onClick = {onButtonClick}>在input上展示文字</button>
            <br/>
            <br/>
            <input value={text} onChange={(e)=>{setText(e.target.value)}} />
        </>
    )
}

export default Example5;