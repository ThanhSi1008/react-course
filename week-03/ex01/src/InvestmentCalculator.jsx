import React, { useState } from 'react';
import './App.css';  // Make sure the CSS file is imported

const InvestmentCalculator = () => {
    const [money, setMoney] = useState('');
    const [rate, setRate] = useState('');
    const [goal, setGoal] = useState('');
    const [resultTable, setResultTable] = useState([]);

    const handleCalculation = () => {
        const results = [];
        let currentMoney = parseFloat(money);
        let currentYear = 0;

        while (currentMoney < parseFloat(goal)) {
            currentYear++;
            currentMoney = currentMoney * (1 + parseFloat(rate) / 100);
            results.push({
                year: currentYear,
                money: parseFloat(money),
                rate: parseFloat(rate),
                result: currentMoney.toFixed(2),
            });
        }
        setResultTable(results);
    };

    return (
        <div className="container">
            <div className="input-container">
                <h2>Investment Calculator</h2>
                <div>
                    <label>Initial Money:</label>
                    <input
                        type="number"
                        value={money}
                        onChange={(e) => setMoney(e.target.value)}
                        placeholder="Enter money"
                    />
                </div>
                <div>
                    <label>Interest Rate (%):</label>
                    <input
                        type="number"
                        value={rate}
                        onChange={(e) => setRate(e.target.value)}
                        placeholder="Enter rate"
                    />
                </div>
                <div>
                    <label>Goal:</label>
                    <input
                        type="number"
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                        placeholder="Enter goal"
                    />
                </div>
                <button onClick={handleCalculation}>Calculate</button>
            </div>

            <div className="table-container">
                <h3>Result Table</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Money</th>
                            <th>Rate (%)</th>
                            <th>Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        {resultTable.map((row, index) => (
                            <tr key={index}>
                                <td>{row.year}</td>
                                <td>{(row.result / (1 + (rate / 100))).toFixed(2)}</td>
                                <td>{row.rate}</td>
                                <td>{row.result}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InvestmentCalculator;
