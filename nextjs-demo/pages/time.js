import React,{useState} from 'react';
import dynamic from "next/dynamic";
const One = dynamic(import('../components/one'))

function Time(props) {
    const [nowTime,setTime] = useState(Date.now)
    const changeTime = async () => {
        const moment = await import('moment')
        setTime(moment.default(Date.now()).format())
    }
    return (
        <div>
            <p>显示时间为:{nowTime}</p>
            <One />
            <button onClick={changeTime}>改变时间格式</button>
        </div>
    );
}

export default Time;