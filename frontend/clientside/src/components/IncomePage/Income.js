import React, {useState, useEffect} from 'react'
import Header from './Header';
import IncomeForm from './IncomeForm';
import IncomeList from  './IncomeList';


export default function Income() {
    const [totalIncome, setTotalIncome] = useState(0);
    const [income, setIncome] = useState([]);

    
    useEffect(() =>{
        let temp = 0;
        for (let i = 0; i< income.length; i++) {
              temp += parseInt(income[i].price);
        }
          setTotalIncome(temp);
         },[income]);
       
    return (
        <div>
            <div className="expensepg">
                <Header totalIncome={totalIncome} />
                <IncomeForm income={income} setIncome={setIncome} />
                <IncomeList income={income} setIncome={setIncome} />
            </div>
        </div>
    )
}
