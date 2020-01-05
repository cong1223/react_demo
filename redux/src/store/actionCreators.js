import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,GET_LIST}  from './actionTypes'
import axios from "axios";

export const changeInputAction = (value)=>({
    type:CHANGE_INPUT,
    value
})

export const addItemAction = ()=>({type:ADD_ITEM})

export const deleteItemAction = (index)=>({
    type:DELETE_ITEM,
    index
})

export const getListAction  = (data)=>({
    type:GET_LIST,
    data
})

//以前的action是对象，现在的action可以是函数了，在dispatch之前可以处理一些操作,这就是redux-thunk带来的好处
export const getTodoList = () => {
    return (dispatch) => {
        axios.get('https://douban.uieee.com/v2/movie/in_theaters').then(res => {
            // todo something
            console.log(res);
            const action = getListAction(res.data.subjects);
            dispatch(action);
        })
    }
}