import React, {Component} from 'react'

export default class Children extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '我是子组件',
            msg: '子组件传值给父组件'
        }
    }

    toParent = () => {
        // console.log(this.props.parent.getChildrenMsg.bind(this, this.state.msg))
        this.props.parent.getChildrenMsg(this, this.state.msg)
    }

    render() {
        return (
            <div>
                <h2>{ this.state.name }</h2>
                <button onClick={ this.toParent }>子组件传入给父组件</button>
            </div>
        )
    }
}

