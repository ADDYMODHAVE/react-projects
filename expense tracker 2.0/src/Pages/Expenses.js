import React, { useRef } from "react";
import "./Expenses.css";

const Expenses = () => {
  const inputAmountRef = useRef();
  const inputDescRef = useRef();
  const inputCategoryRef = useRef();
  const addExpenseHandler = (event) => {
    event.preventDefault();
    console.log(inputDescRef.current.value);
  };
  return (
    <div>
      <div>
        <form onSubmit={addExpenseHandler} className="form-expenses">
          <label htmlFor="amount">Amount</label>
          <input ref={inputAmountRef} type="number" id="amount" />

          <label htmlFor="desc">Description</label>
          <textarea
            type="text"
            id="desc"
            rows="3"
            ref={inputDescRef}
          ></textarea>
          <label htmlFor="category">Choose a car:</label>
          <select ref={inputCategoryRef} id="category">
            <option value="Food">Food</option>
            <option value="Shopping">Shopping</option>
            <option value="Rent">Rent</option>
            <option value="Others">Others</option>
          </select>
          <button type="submit">Add Expense</button>
        </form>
      </div>
      <div>All Expenses</div>
    </div>
  );
};

export default Expenses;
