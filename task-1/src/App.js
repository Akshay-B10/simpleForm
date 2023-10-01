import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [{
    date: new Date(2023, 8, 29),
    amount: 100,
    description: "Food",
    location: "McD, XYZ City"
  }, {
    date: new Date(2023, 9, 1),
    amount: 400,
    description: "Clothing",
    location: "Maxx, Mall"
  }]
  return (
    <div>
      <h2>Expense Tracker</h2>
      <ExpenseItem date={expenses[0].date} amount={expenses[0].amount} description={expenses[0].description} location={expenses[0].location}></ExpenseItem>
      <ExpenseItem date={expenses[1].date} amount={expenses[1].amount} description={expenses[1].description} location={expenses[1].location}></ExpenseItem>
    </div>
  );
}

export default App;