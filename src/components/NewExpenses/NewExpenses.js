import React, {useState} from "react";
import './NewExpenses.css'
import ExpensesForm from "./ExpensesForm";


const NewExpenses = (props) => {

    const [isEditing, SetIsEditing] = useState(false);


    const SaveExpenseDataHandler = (enteredExpensesData) => {
        const expenseData = {
            ...enteredExpensesData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        SetIsEditing(false);
    };

    const startEditingHandler = () => {
        SetIsEditing(true);
    };
 
    const stopEditingHandler = ()=> {
        SetIsEditing(false);
    };
    return (
        <div className="new-expense">
           {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpensesForm onSaveExpenseData={SaveExpenseDataHandler} onCancel={stopEditingHandler} />}
        </div>
    );
};


export default NewExpenses;