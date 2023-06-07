import React, { Component } from "react";

class ScorollBox extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    // 이 코드는 구조분해 문법을 사용했습니다.
    // const scrollHiehgt = this.box.scrollHeight;
    // const clientHeight = this.box.clientHeight;
    // 이 코드는 앞의 코드와 같은 의미입니다.
    this.box.scrollTop = scrollHeight - clientHeight;
    this.box.style.border = "4px solid red";
  };

  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative",
    };

    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white,black)",
    };

    return (
      <>
        <h2>스크롤박스 생성</h2>
        <div
          style={style}
          ref={(ref) => {this.box = ref;}}
        >
          <div style={innerStyle}/>
        </div>
      </>
    );
  }
}

export default ScorollBox;
