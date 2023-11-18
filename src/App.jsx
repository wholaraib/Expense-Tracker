/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
      
    </div>
  )
}

export default App
