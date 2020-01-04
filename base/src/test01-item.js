import React, {Component} from 'react';

class Test01Item extends Component {
    handleClick() {
        this.props.deleteItem(this.props.index);
    }

    render() {
        console.log('Test01Item==>render执行了')
        return (
            <div onClick={this.handleClick.bind(this)}>
                {`这里是Test01Item:${this.props.content}`}
            </div>
        );
    }

    // 性能优化,需要渲染的值没有改变的情况下,不需要每次都重新render
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (nextProps.content != this.props.content) {
            return true;
        }else {
            return false
        }
    }
}

export default Test01Item;