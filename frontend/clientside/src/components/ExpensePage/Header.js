import React from 'react'

function Header({totalExpense}) {
    return (
        <header>
            <h1>Expense Tracker</h1>
            <div className ="total-income">GHS{totalExpense}</div>
        </header>
    );
}

export default Header
