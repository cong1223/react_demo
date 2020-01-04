import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Test01LifeCycle extends Component {
    constructor(props) {
        super(props);
        console.log('Test01LifeCycle','构造方法执行了')
    }

    componentWillMount() {
        console.log('Test01LifeCycle','componentWillMount')
    }

    componentDidMount() {
        console.log('Test01LifeCycle','componentDidMount')
    }

    componentWillReceiveProps(nextProps) {
        console.log('Test01LifeCycle','componentWillReceiveProps',nextProps)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Test01LifeCycle','shouldComponentUpdate',nextProps,nextState)
        return true
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Test01LifeCycle','componentWillUpdate',nextProps,nextState)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Test01LifeCycle','componentDidUpdate',prevProps,prevState)
    }

    componentWillUnmount() {
        console.log('Test01LifeCycle','componentWillUnmount')
    }

    render() {
        return (
            <div>
                组件生命周期
            </div>
        );
    }
}

Test01LifeCycle.propTypes = {};

export default Test01LifeCycle;