import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Test01PropType extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.value}</h1>
                <h6>{`必须传num的值为:${this.props.name}`}</h6>
                <ul>
                    {
                        this.props.list.map((item,index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

Test01PropType.propTypes = {
    value: PropTypes.string,
    list: PropTypes.array,
    name: PropTypes.string.isRequired
};

Test01PropType.defaultProps = {
    name: 'myName'
}

export default Test01PropType;