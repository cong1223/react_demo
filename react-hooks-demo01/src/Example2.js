import React, {Component, useEffect, useState} from 'react';

// 不用hooks的写法如下:
// class Example2 extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {count: 0}
//         this.addCount = this.addCount.bind(this);
//     }
//     addCount() {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <p>you click {this.state.count} times!</p>
//                 <button onClick={this.addCount}>click me!</button>
//             </div>
//         );
//     }
//     componentDidMount() {
//         console.log('==componentDidMount==')
//     }
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         console.log('==componentDidUpdate==','prevProps:',prevProps,'prevState:',prevState,'snapshot:',snapshot)
//     }
// }



// 使用hooks的写法如下:

function Example2(props) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(`useEffect=>You clicked ${count} times`)
    })
    return (
        <div>
            <p>you click {count} times!</p>
            <button onClick={() => {setCount(count+1)}}>click me</button>
        </div>
    );
}

export default Example2;
