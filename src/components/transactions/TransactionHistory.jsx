import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.transactionsTable}>
      <thead className={css.tableHeader}>
        <tr className={css.tableHeaderRow}>
          <th className={css.columnHeader}>Type</th>
          <th className={css.columnHeader}>Amount</th>
          <th className={css.columnHeader}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={css.tableTransactionRow}>
            <td className={css.transactionData}>{type}</td>
            <td className={css.transactionData}>{amount}</td>
            <td className={css.transactionData}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
