import React, {useRef} from 'react';

function Example4(props) {
    const inputEl = useRef(null);
    function onButtonClick() {
        inputEl.current.value = '测试';
        console.log('=====',inputEl)
    }
    return (
        <div>
            <input type="text" ref={inputEl}/>
            <button onClick={onButtonClick}>在input上展示文字</button>
        </div>
    );
}

export default Example4;