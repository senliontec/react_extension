import React, { Component } from 'react'

// 类式组件
/* class Demo extends Component {
    state = { count: 0 }

    add = () => {
        this.setState((state, props) => {
            return { count: state.count + 1 }
        })
    }



    render() {
        return (
            <div>
                <h2>当前求和为:{this.state.count}</h2>
                <button onClick={this.add}> 点我+1</button>
            </div>
        )
    }
} */

// 执行了n+1次
function Demo() {

    // React底层做了处理，不会因为再次调用导致重新初始化
    const [count, setCount] = React.useState(0);
    const [usrname, setName] = React.useState('Tom');

    // 加回调函数
    function add() {
        //  setCount(count + 1) // 第一种写法
        setCount((count) => {
            return count + 1
        })
    }

    function changeName() {
        setName((usrname) => {
            return usrname = "jack"
        })
    }

    return (
        <div>
            <h2>当前求和为:{count}</h2>
            <h2>我的名字是:{usrname}</h2>
            <button onClick={add}> 点我+1</button>
            <button onClick={changeName}>点我改名</button>
        </div>
    )
}

export default Demo