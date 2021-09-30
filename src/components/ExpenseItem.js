import './ExpenseItem.css'
function ExpenseItem()
{
    return(
        <div className="expense-item">
            <div>26/9/21</div>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
                <div className="expense-item__price">$126.32</div>
            </div>
        </div>
    )
}
export default ExpenseItem;