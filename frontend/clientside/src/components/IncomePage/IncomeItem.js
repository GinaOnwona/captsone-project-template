import React,{useState} from 'react';

function IncomeItem({income, index, removeIncome}) {
  let date = new Date(income.date);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
 
  const {removeHandle } = useState
//   = i => {
//     removeIncome(i);
//   }

  return (
    <div className="income-item">
      <button className="remove-item" onClick={removeHandle}>x</button>
      <div className="desc">{income.desc}</div>
      <div className="price">GHs{income.price}</div>
      <div className="date">{day + "/" + month + "/" + year}</div>
    </div>
  )
}

export default IncomeItem;