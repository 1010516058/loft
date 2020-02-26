import React, {Component} from 'react'
import Children from './Children'

export default class Parent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '我是父组件',
            msg: '父组件传值给子组件',
            childrenMsg: ''
        }
    }

    getChildrenMsg = (result, msg) => {
        // console.log(result, msg)
        // 很奇怪这里的result就是子组件那bind的第一个参数this，msg是第二个参数
        this.setState({
            childrenMsg: msg
        })
    }

    render() {
        return (
            <div>
                <h2>{ this.state.name }</h2>
                <h3>子组件传来的值为：{ this.state.childrenMsg }</h3>
                <h3>我要引入子组件了：</h3>
                <hr/>
                <Children parent={ this } />
            </div>
        )
    }
}
