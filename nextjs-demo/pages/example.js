import React,{useState} from 'react';


function Example(props) {
    const [color, setColor] = useState('blue');
    const changeColor=()=>{
        setColor(color=='blue'?'red':'blue')
    }
    return (
        <div>
            <h2 className="title">
                测试样式的编写
            </h2>
            <button onClick={changeColor}>改变按钮的颜色</button>
            <style jsx>
                {`
                    h2.title {color: ${color}
                `}
            </style>
        </div>
    );
}

export default Example;