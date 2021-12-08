import React, { Component } from 'react'
import './index.css'

// 创建Context对象
const MyContext = React.createContext();
const { Provider, Consumer } = MyContext;


export default class A extends Component {

    state = { username: 'tom', age: 18 }

    render() {
        const { username, age } = this.state
        return (
            <div className='parent'>
                <h3>我是A组件</h3>
                <h4>我的用户名是:{username}, 年龄:{age}</h4>
                <Provider value={{ username: username, age: age }}>
                    <B />
                </Provider>

            </div>
        )
    }
}


class B extends Component {
    render() {
        return (
            <div className='child'>
                <h3>我是B组件</h3>
                <C />
            </div>
        )
    }
}
/* 
// C组件是类组件
class C extends Component {
    static contextType = MyContext
    render() {
        const { username, age } = this.context
        return (
            <div className='grand'>
                <h3>我是C组件</h3>
                <h4>我从A组件接收到的用户名是:{username},接收到的年龄是:{age}</h4>
            </div>
        )
    }
}
 */

// 假设C组件是函数式组件
function C() {
    return (
        <div className='grand'>
            <h3>我是C组件</h3>
            <h4>我从A组件接收到的用户名是:
                <Consumer>
                    {
                        value => {
                            return `${value.username}, 接收到的年龄是:${value.age}`
                        }
                    }
                </Consumer>
            </h4>
        </div>
    )
}