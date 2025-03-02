import { useState } from 'react';

export default function Lab01() {
    const [text, setText] = useState('default');
    const [inputValue, setInputValue] = useState('');

    function handleClick() {
        setText(inputValue);
    }

    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <br />
            <button onClick={handleClick}>Hello</button>
            <br />
            <span>Hello {text}</span>
        </>
    );
}
