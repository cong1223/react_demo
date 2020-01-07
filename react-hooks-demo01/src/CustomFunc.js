import React,{useCallback, useEffect, useState} from "react";

function useWinSize() {
    const [size,setSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    })

    // useCallback缓存函数
    const onResize = useCallback(() => {
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        })
    },[])

    //第一次进入方法时用useEffect来注册resize监听时间, 防止一直监听所以在方法移除时，使用return的方式移除监听。最后返回size变量
    useEffect(() => {
        window.addEventListener('resize',onResize)
        return () => {
            window.removeEventListener('resize',onResize)
        }
    })
    return size
}


function Example6(props) {
    const s = useWinSize()
    return (
        <div>
            页面的宽度:{s.width} * {s.height}
        </div>
    );
}

export default Example6;