import React from 'react';

const IterationSample2 = () => {
    var numbers = [1, 2, 3, 4, 5];
    var processed = numbers.map(function(num){
        return num*num;
    });
    console.log(processed);
    return (
        <div>
            
        </div>
    );
};

export default IterationSample2;