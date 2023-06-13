import React, { Component } from 'react';

class MyComponent1 extends Component {
    id = 1
    setId = n => {
        this.id = n;
    }
    printId = () => {
        console.log(this.id);
    }
    render() {
        return (
            <div>
                MyComponent1
            </div>
        );
    }
}

export default MyComponent1;