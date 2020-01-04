import React, {Component,Fragment} from "react";
import Test01Item from "./test01-item";
import Test01PropType from "./test01-prop-type"
import Test01LifeCycle from "./test01-life-cycle";
import Test01Ani from "./test01-ani"
import './test01.css'
import axios from "axios"

class Test01 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: ['li-01','li-02','li-03']
        }
        // this.inputChagne = this.inputChagne.bind(this);
    }

    inputChagne(e) {
        console.log(this.input);
        this.setState({
            inputValue: e.target.value
        })
    }

    addListItem() {
        this.setState({
            list: [...this.state.list,this.state.inputValue]
        })
    }

    deleteListItem(i) {
        let listTemp = this.state.list;
        listTemp.splice(i,1);
        this.setState({
            list: listTemp
        })
    }

    // eslint-disable-next-line react/require-render-return
    render() {
        return (
            <Fragment>
                <ul>
                    <li><input type="text"
                               ref={(input) => {this.input = input}}
                               value={this.state.inputValue}
                               onChange={this.inputChagne.bind(this)}/><button onClick={this.addListItem.bind(this)}>增加列表项</button></li>
                    <li>{this.state.inputValue}</li>
                </ul>
                <ul>
                    {
                        this.state.list.map((item,index) => {
                            return (
                                <Test01Item key={index}
                                            content={item}
                                            index={index}
                                            list={this.state.list}
                                            deleteItem={this.deleteListItem.bind(this)} />
                            )
                        })
                    }
                </ul>
                <div>------------------------------</div>
                <Test01PropType list={this.state.list} value={this.state.inputValue} ></Test01PropType>
                <div>------------------------------</div>
                {/*<Test01LifeCycle value={this.state.inputValue}></Test01LifeCycle>*/}
                <div>------------------------------</div>
                <Test01Ani></Test01Ani>
            </Fragment>
        )
    }

    componentDidMount() {
        axios.post('https://trace.huntlee.cn/r.png?t=perf&times=1&page=%5Bapp%5D&tag=&begin=1577676185485&fpt=0&app=mini_wx&sr=414x736&vp=414x736&dpr=3&ul=zh&uid=uid_413319&pid=0HolXncIYmPMPmiy&_v=1.0.1&sid=0zkdR4CprLav4zn42z0hpFFpOz0e&sampling=1&z=k4rvnzmw')
            .then(res => {
                console.log('axios请求',res);
            })
            .catch(e => {
                console.log('请求出错',e)
            })
    }
}


export default Test01;