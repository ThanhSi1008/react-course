import { useState } from 'react';

export default function Lab01() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [result, setResult] = useState(0);

    function handleClick() {
        setResult(a + b);
    }

    return (
        <>
            <input
                type="text"
                value={a}
                onChange={(e) => setA(Number(e.target.value))}
            />
            <br />
            <input
                type="text"
                value={b}
                onChange={(e) => setB(Number(e.target.value))}
            />
            <br />
            <button onClick={handleClick}>Caculate</button>
            <br />
            <span>{result}</span>
        </>
    );
}
