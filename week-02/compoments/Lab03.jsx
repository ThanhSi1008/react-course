import { useState } from 'react';

export default function Lab03() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [result, setResult] = useState(0);
    const [operation, setOperation] = useState('+'); // Track the selected operation

    function handleClick() {
        let res;
        switch (operation) {
            case '+':
                res = a + b;
                break;
            case '-':
                res = a - b;
                break;
            case '*':
                res = a * b;
                break;
            case '/':
                res = b !== 0 ? a / b : 'Cannot divide by zero';
                break;
            default:
                res = 0;
        }
        setResult(res);
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
            
            <label>
                <input
                    type="radio"
                    value="+"
                    checked={operation === '+'}
                    onChange={() => setOperation('+')}
                />
                +
            </label>
            <label>
                <input
                    type="radio"
                    value="-"
                    checked={operation === '-'}
                    onChange={() => setOperation('-')}
                />
                -
            </label>
            <label>
                <input
                    type="radio"
                    value="*"
                    checked={operation === '*'}
                    onChange={() => setOperation('*')}
                />
                *
            </label>
            <label>
                <input
                    type="radio"
                    value="/"
                    checked={operation === '/'}
                    onChange={() => setOperation('/')}
                />
                /
            </label>
            <br />
            
            <button onClick={handleClick}>Calculate</button>
            <br />
            <span>Result: {result}</span>
        </>
    );
}
