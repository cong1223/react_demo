import React, {Component} from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <span>list-page</span>
                <span>{`路由传过来的值为${this.state.id}`}</span>
            </div>
        );
    }
    componentDidMount() {
        console.log(this.props.match)
        this.setState({id: this.props.match.params.id})
    }
}

export default List;
