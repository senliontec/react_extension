import React, { Component } from 'react'

export default class Demo extends Component {
    state = { count: 0 }

    add = () => {
        // 1. 获取原来的count值
        const { count } = this.state

        // 对象式的setState写法

        // setState引起React后续更新状态的动作是异步的
        /* this.setState({ count: count + 1 })
        console.log(this.state.count); */

        // 通过第二个参数(回调函数)调用
        /*   this.setState({ count: count + 1 }, () => {
              console.log('在状态更新完毕、界面也更新后(render调用后)才被调用:', this.state.count)
          }) */

        // 函数式的setState写法
        this.setState((state, props) => {
            console.log(state, props)
            return { count: state.count + 1 }
        })

    }

    render() {
        return (
            <div>
                <h1>当前求和为:{this.state.count}</h1>
                <button onClick={this.add}>点我+1</button>
            </div>
        )
    }
}