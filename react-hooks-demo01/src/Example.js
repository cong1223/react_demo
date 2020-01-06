import React, {Component, useEffect, useState} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

// 不用react-hooks的写法如下:
// class Example extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {count: 0}
//         this.addNum = this.addNum.bind(this);
//     }
//     addNum() {
//         this.setState({
//             count: this.state.count+1
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <h2>you click {this.state.count} times!</h2>
//                 <button onClick={this.addNum}>+1</button>
//             </div>
//         );
//     }
// }
//
// export default Example;


function Index() {
    useEffect(() => {
        return () => {
            console.log('====Index页面====')
        }
    },[])
    return <h2>Index页面</h2>
}

function List() {
    useEffect(() => {
        return () => {
            console.log('====List页面====')
        }
    },[])
    return <h2>List页面</h2>
}


// 使用react-hooks的写法如下:

function Example(props) {
    const [ count, setCount] = useState(0)
    const [ text, setText] = useState('hello world!')
    useEffect(()=>{
        console.log(`useEffect=>You clicked ${count} times`)

        return ()=>{
            console.log('====================')
        }
    },[count])
    return (
        <div>
            <h2>you click {count} times!</h2>
            <h2>测试一下text内容:{text}</h2>
            <button onClick={()=>{setCount(count + 1)}}> click me </button>
            <button onClick={()=>{setText('王某')}}>改内容</button>
            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list">列表</Link></li>
                </ul>
                <Route path="/" exact component={Index}></Route>
                <Route path="/list" component={List}></Route>
            </Router>
        </div>
    );
}

export default Example;