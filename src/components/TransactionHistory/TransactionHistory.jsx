import css from "./TransactionHistory.module.css"

const TransactionHistory = props => (
    <table class="transactionHistory">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {props.items.map((item) => (
        <tr>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
        </tr>
    ))}
  </tbody>
</table>
);

export default TransactionHistory