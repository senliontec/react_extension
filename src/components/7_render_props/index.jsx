import React, { Component } from "react";
import C from "../1_setState";
import "./index.css";

export default class Parent extends Component {
  render() {
    return (
      <div className="parent">
        <h3>我是Parent组件</h3>
        <A render={(name) => <C name={name} />} />
      </div>
    );
  }
}

class A extends Component {
  state = { usrname: "tom" };

  render() {
    console.log(this.props);
    const { usrname } = this.state;
    return (
      <div className="a">
        <h3>我是A组件</h3>
        {this.props.render(usrname)}{" "}
        {/* 预留一个位置，可以随意控制将谁放在这里，相当于Vue里的插槽技术 */}
      </div>
    );
  }
}

class B extends Component {
  render() {
    console.log("render B");
    return (
      <div className="b">
        <h3>我是B组件,{this.props.name}</h3>
      </div>
    );
  }
}
