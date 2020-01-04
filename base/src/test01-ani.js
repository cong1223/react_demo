import React, {Component} from 'react';
import { CSSTransition,TransitionGroup } from 'react-transition-group'

class Test01Ani extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true,
            list: ['ani-01','ani-02','ani-03']
        }
    }
    toggle() {
        this.setState({
            isShow: this.state.isShow ? false : true
        })
    }
    deleteItem(i) {
        let list = this.state.list;
        list.splice(i,1);
        this.setState({
            list: list
        })
    }
    render() {
        return (
            <div>
                <CSSTransition in={this.state.isShow}
                               classNames="boss-text"
                               unmountOnExit
                               onEntered={(el) => {el.style.color='blue'}}
                               timeout={2000}>
                    <div>测试动画</div>
                </CSSTransition>
                <ul>
                    <TransitionGroup>
                        {
                            this.state.list.map((item,index) => {
                                return (
                                    <CSSTransition key={index}
                                                   classNames="boss-text"
                                                   timeout={2000}
                                                   unmountOnExit
                                                   onEntered={(el) => {el.style.color='blue'}}
                                                   appear={true}>
                                        <li onClick={this.deleteItem.bind(this,index)}>{item}</li>
                                    </CSSTransition>
                                )
                            })
                        }
                    </TransitionGroup>
                </ul>
                <div><button onClick={this.toggle.bind(this)}>button</button></div>
            </div>
        );
    }
}

export default Test01Ani;