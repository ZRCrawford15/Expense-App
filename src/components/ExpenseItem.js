import './ExpenseItem.css'

function ExpenseItem() {
    const expenseDate = new Date(2021, 2, 28);
    const epenseTitle = 'Car Inursance';
    const expenseAmount = 294.67;

  return (
    <div className='expense-item'>
      <div>{expenseDate.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{epenseTitle}</h2>
        <div className='expense-item__price'>${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
