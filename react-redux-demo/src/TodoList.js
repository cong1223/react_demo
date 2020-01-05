import React from 'react';
import {connect} from 'react-redux'  //引入连接器

// 无状态组件
const TodoList = (props) => {
    let {inputChange,inputValue,addItem,list} = props;
    return (
        <div>
            <div><input onChange={inputChange} value={inputValue} /><button onClick={addItem}>提交</button></div>
            <ul>
                {
                    list.map((item,index) => {
                        return (<li key={index}>{item}</li>)
                    })
                }
            </ul>
        </div>
    );
}


const dispatchToProps = (dispatch) =>{
    return {
        inputChange(e){
            let action = {
                type:'change_input',
                value:e.target.value
            }
            dispatch(action)
        },
        addItem() {
            let action = {type: 'add_item'}
            dispatch(action)
        }
    }
}
const stateToProps = (state)=>{
    return {
        inputValue : state.inputValue,
        list: state.list
    }
}

export default connect(stateToProps,dispatchToProps)(TodoList);