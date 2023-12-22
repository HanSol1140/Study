import React, { useEffect, useRef } from 'react';

const Test = () => {
    const audioRef = useRef(new Audio());

    useEffect(() => {
        fetch('https://192.168.0.137:8080/audioTest')
            .then(response => response.blob())
            .then(blob => {
                const audioUrl = URL.createObjectURL(blob);
                audioRef.current.src = audioUrl;
            })
            .catch(error => {
                console.error('Error fetching audio:', error);
            });
    }, []);

    return (
        <div>
            <audio ref={audioRef} controls />
        </div>
    );
};

export default Test;