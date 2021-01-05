const mongoose = require('mongoose')


const expenseSchema = mongoose.Schema({
    id: {type: Number, required: true},
    expenseDescription: {type: String, required: true},
    expenseCategory: {type: String, required: true},
    dateCreated: {type: Date, default: Date.now},
    amount:{type: Number, required:true}

})

const incomeSchema = mongoose.Schema({
    id: {type: Number, required: true},
    incomeDescription: {type: String, required: true},
    incomeCategory: {type: String, required: true},
    dateCreated: {type: Date, default: Date.now},
    amount:{type: Number, required:true}

}) 

expensesSchema.set('toJSON', {
    transform: (doc, expenses) => {
        user.id = expenses._id.toString()
        delete expenses._id
        delete expenses.__v
        delete expenses.password
    }
})

// Hash password before saving 

expensesSchema.pre("save", function(){

})


const Expense = mongoose.model("Expenses", expensesSchema)