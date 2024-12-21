import React, { Component } from 'react';
import ValidationSample from "./ValidationSample";
import ValidationSample1 from './ValidationSample1';
import ValidationSample2 from './ValidationSample2';
import ScorollBox from './ScorollBox';
class App extends Component {
  render() {
    return (
      <div>
      <ValidationSample
        ref={(ref) => {this.ValidationSample=ref}}
      />
      <ValidationSample1/>
      <ValidationSample2/>
      <ScorollBox
        ref={(ref) => {this.scorollBox=ref}}
      />
      <button onClick={() => this.scorollBox.scrollToBottom()}>맨밑으로</button>
    </div>
    );
  }
}

export default App;