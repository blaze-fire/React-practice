import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.expenses[0].title}
        date={props.expenses[0].date}
        amount={props.expenses[0].amount}
      />
    </Card>
  );
}

export default Expenses;
