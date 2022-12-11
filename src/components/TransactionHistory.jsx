import PropTypes from 'prop-types';
import css from '../styles/TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr className={css.headline}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(item => (
        <tbody key={item.id}>
          <tr>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.array,
};
