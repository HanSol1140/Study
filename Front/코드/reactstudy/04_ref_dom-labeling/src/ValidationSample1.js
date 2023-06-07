import React, { Component } from "react";
import "./ValidationSample.css";

class ValidationSample1 extends Component {

  state = {
    password: "",
    clicked: false,
    validated: false, // 비밀번호가 틀림
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  /** 버튼 클릭시 비밀번호 검증하는 함수 */
  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });
    this.input.style.fontSize = "40px";
    this.input.focus();
  };

  render() {
    return (
      <div>
        <h2>(클래스형)콜백함수로 ref 만들기!</h2>
        <input
          ref={(ref) => {
            this.input = ref;
          }}
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        />
        <button onClick={this.handleButtonClick}>검증하기1</button>
      </div>
    );
  }
}

export default ValidationSample1;
