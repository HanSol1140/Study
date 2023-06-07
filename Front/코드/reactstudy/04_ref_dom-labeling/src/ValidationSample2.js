import React, { Component } from "react";
import "./ValidationSample.css";

class ValidationSample2 extends Component {
  input = React.createRef();

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
    this.input.current.style.fontSize = "60px";
    this.input.current.focus();
  };

  render() {
    return (
      <div>
        <h2>(클래스형)createRef를 통해 ref만들기!</h2>
        <input
          ref={this.input}
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
        <button onClick={this.handleButtonClick}>검증하기2</button>
      </div>
    );
  }
}

export default ValidationSample2;
