import React from 'react';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';

const App = () => {
  return (
    <div>
      <MyComponent name = "송한솔" favoriteNumber={1}>리액트</MyComponent>
      <Counter/>
      <Say/>
    </div>
  );
};

export default App;

