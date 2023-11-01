import './ExpenseItem.css'; // 이 프로젝트 전체가 css를 인식하게 하기 위해서
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React, {useState} from 'react';



const ExpenseItem = (props) => {

    return (
        <li>
        <div className='expense-item'> 
            <ExpenseDate date={props.date}/>
          <div className='expense-item__escription'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>  
            </div>
        
        </div>
        </li>
    )
}

export default ExpenseItem; 