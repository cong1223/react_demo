import React, {Component,useState} from 'react';

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


// 使用react-hooks的写法如下:

function Example(props) {
    const [ count, setCount] = useState(0)
    const [ text, setText] = useState('hello world!')
    return (
        <div>
            <h2>you click {count} times!</h2>
            <h2>测试一下text内容:{text}</h2>
            <button onClick={()=>{setCount(count + 1)}}> click me </button>
            <button onClick={()=>{setText('王某')}}>改内容</button>
        </div>
    );
}

export default Example;