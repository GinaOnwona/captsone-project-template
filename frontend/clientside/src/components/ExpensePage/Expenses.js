import React,  {useState, useEffect} from 'react';
import Header from './Header';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';



function Expenses() {
    const [totalExpense, setTotalExpense] = useState(0);
    const [expense, setExpense] = useState([]);
  

    useEffect(() =>{
        let temp = 0;
        for (let i = 0; i< expense.length; i++) {
              temp += parseInt(expense[i].price);
        }
          setTotalExpense(temp);
         },[expense]);
       
    return (
        <div>
            <div className="expensepg">
                <Header totalExpense={totalExpense} />
                <ExpenseForm expense={expense} setExpense={setExpense} />
                <ExpenseList expense={expense} setExpense={setExpense} />
            
        </div>
        </div>
    )
}

export default Expenses
