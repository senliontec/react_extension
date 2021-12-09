//import React, { Component } from 'react'
import React, { PureComponent } from 'react'

import './index.css'

export default class Parent extends PureComponent {

    state = { carName: "奔驰c63" }
    changeCar = () => {
        this.setState({ carName: "迈巴赫" })
    }

    /*     shouldComponentUpdate(nextProps, nextState) {
            console.log('接下来要变化的目标Props', nextProps);
            console.log('接下来要变化的目标State', nextState);
            console.log('目前的Props', this.props,);
            console.log('目前的State', this.state);
            if (this.state.carName === nextState.carName) {
                return false;
            } else {
                return true;
            }
    
        } */

    render() {
        console.log('parent-render')
        const { carName } = this.state
        return (
            <div className='parent'>
                <h3>我是Parent组件</h3>
                <span>我的车名字是:{carName}</span>
                <br>
                </br>
                <button onClick={this.changeCar}>点我换车</button>
                <Child carName={carName} />
            </div>
        )
    }
}


class Child extends PureComponent {

    /*     shouldComponentUpdate(nextProps) {
    
            console.log('------------------我是孩子组件')
            console.log('接下来要变化的目标Props', nextProps);
            console.log('目前的Props', this.props,);
    
            if (this.props.carName === nextProps.carName) {
                return false;
            } else {
                return true;
            }
    
        } */

    render() {
        console.log('child-render')
        return (
            <div className='child'>
                <h3>我是Child组件</h3>
                <span>我接到的车是:{this.props.carName}</span>
            </div>
        )
    }
}
