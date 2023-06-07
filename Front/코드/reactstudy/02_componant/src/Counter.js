import React, { Component } from 'react';

class Counter extends Component {

    state = {
        number: 0,
        fixedNumber: 0
        // state를 조회할 때는 this.state로 조회합니다.
    };

    render() {
        const { number, fixedNumber } = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값 : {fixedNumber}</h2>
                <button onClick={
                    () => {
                        // this.setState({number: number +1});
                        this.setState((prevState) => {
                            return {
                                number: prevState.number +1
                            };
                        })
                        // 위 코드와 아래 코드는 완전히 똑같은 기능을 합니다.
                        // 아래 코드는 함수에서 바로 객체를 반환한다는 의미입니다.
                        this.setState(prevState => ({
                            number:prevState.number + 1
                        }));
                    }
                }>
                    +1버튼
                </button>
                <br></br>
                <br></br>
            </div>
        );
    }
}

export default Counter;