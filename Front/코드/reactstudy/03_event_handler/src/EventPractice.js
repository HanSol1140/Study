import React, { useState } from "react";

const EventPractice = () => {\
    

  const [form, setForm] = useState({
    username: "",
    message: "",
  });

  const { username, message } = form;

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log({ [e.target.name]: e.target.value });
  };

  const onClick = () => {
    alert(username + " : " + message);
    setForm({
      username: "",
      message: "",
    });
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습!</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <br />
      <input
        type="text"
        name="message"
        placeholder="메세지를 입력해보세요"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <br />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;

// import React, { Component } from "react";

// class EventPractice extends Component {
//   state = {
//     message: "",
//     username: ""
//   };

//   handleChange = (e) => {
//     this.setState({
//         [e.target.name]: e.target.value
//     });
//     console.log({[e.target.name]: e.target.value});
//   };

//   handleClick = () => {
//     alert(this.state.username+" : "+this.state.message);
//     this.setState({
//       message: "",
//       username: ""
//     });
//   };

//   handleKeyPress = (e) => {
//     if(e.key ==='Enter') {
//         this.handleClick();
//     }
//   }
//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습!</h1>
//         <input
//             type="text"
//             name="username"
//             placeholder="사용자명"
//             value={this.state.username}
//             onChange={this.handleChange}
//         />
//         <br/>
//         <input
//           type="text"
//           name="message"
//           placeholder="메세지를 입력해보세요"
//           value={this.state.message}
//           onChange={this.handleChange}
//           onKeyPress={this.handleKeyPress}
//         />
//         <br/>
//         <button onClick={this.handleClick}>확인</button>
//       </div>
//     );
//   }
// }

// export default EventPractice;
