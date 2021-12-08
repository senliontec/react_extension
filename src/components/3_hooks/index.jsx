import React, { Component } from 'react'
import ReactDom from 'react-dom'

// 类式组件
/* class Demo extends Component {
    state = { count: 0 }

    myRef = React.createRef()

    add = () => {
        this.setState((state, props) => {
            return { count: state.count + 1 }
        })
    }
    unmount = () => {
        ReactDom.unmountComponentAtNode(document.getElementById('root'))
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState(state => ({ count: state.count + 1 }))
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    show = () => {
        alert(this.myRef.current.value)
    }


    render() {
        return (
            <div>
                <input type="text" ref={this.myRef}></input>
                <h2>当前求和为:{this.state.count}</h2>
                <button onClick={this.add}> 点我+1</button>
                <button onClick={this.unmount}>卸载组件</button>
                <button onClick={this.show}>点击提示数据</button>
            </div>
        )
    }
} */

// 执行了n+1次
function Demo() {

    // React底层做了处理，不会因为再次调用导致重新初始化
    const [count, setCount] = React.useState(0);

    const myRef = React.useRef()

    React.useEffect(() => {
        let timer = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)
        return () => {
            clearInterval(timer);
        }
    }, []) // 第二个参数[]中放入要监视的对象，如果为空，则只监视本身；如果省略第二个参数，则监视全部

    // 加回调函数
    function add() {
        //  setCount(count + 1) // 第一种写法
        setCount((count) => {
            return count + 1
        })
    }

    function unmount() {
        ReactDom.unmountComponentAtNode(document.getElementById('root'))

    }

    function show() {
        alert(myRef.current.value)
    }


    return (
        <div>
            <input type="text" ref={myRef}></input>
            <h2>当前账户余额:{count}</h2>
            <button onClick={add}> 点我+1</button>
            <button onClick={unmount}>卸载组件</button>
            <button onClick={show}>点我提示数据</button>


        </div>
    )
}

export default Demo