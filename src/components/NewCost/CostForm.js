import React, { useState } from 'react';
import './CostForm.css';

const CostForm = () => {
    const [inputName, setInputName] = useState("");
    const [inputSum, setInputSum] = useState("");
    const [inputDate, setInputDate] = useState("");


    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
    };

    const sumChangeHandler = (event) => {
        setInputSum(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setInputDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const costData = {
            name: inputName,
            price: inputSum,
            date: new Date(inputDate),
        };

        console.log(costData);
        setInputSum('');
        setInputName('');
        setInputDate('');
    };
     
    return (
    <form onSubmit={submitHandler}>
        <div className="new-cost__controls">
            <div className="new-cost__control">
                <label>Name</label>
                <input type="text" value={inputName}  placeholder="Type a message" onChange={nameChangeHandler} />
            </div>
            <div className="new-cost__controls">
                <label>Sum</label>
                <input type="number" value={inputSum} min='0.01' step='0.01' onChange={sumChangeHandler} />
            </div>
            <div className="new-cost__controls">
                <label>Date</label>
                <input type="date" value={inputDate} min='2020-01-01' step='2020-12-31' onChange={dateChangeHandler} />
            </div>
            <div className="new-cost__actions">
                <button type="submit">add Costs</button>
            </div>
        </div>
    </form>
    )
}

export default CostForm;

