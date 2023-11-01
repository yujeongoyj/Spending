
import React, { useState } from 'react';
import './ExpensesForm.css';



const ExpensesForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const inputChangeHandler = (identifier, value) => {
    //     if(identifier === 'title') {
    //         setEnteredTitle(value);
    //     } else if(identifier === 'date') {
    //         setEnteredDate(value);
    //     } else {
    //         setEnteredAmount(value);
    //     }
    // } 

    // const [userInput, setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:'',
    // })
    // 내부함수에서 제공하는 상태스냅샷이 항상 최근이 되도록 해준다: 예전 상태에 의존할때는 이 방법!!


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
        // setUserInput = (prevState) => {
        //     return {...prevState, enteredTitle: event.target.value}


    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount:event.target.value,
        // });
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate:event.target.value,
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        
        props.onSaveExpenseData(expenseData);
    
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        
    };


    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text"
                        value={enteredTitle}
                        onChange={titleChangeHandler} />
                    {/* onChange={(event)=>{inputChangeHandler('title', event.target.value)}} */}
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={enteredAmount}
                        onChange={amountChangeHandler} />
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min='2019-01-01'
                        max='2024-12-31'
                        value={enteredDate}
                        onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expenses</button>
            </div>

        </form>
    );
};



export default ExpensesForm;