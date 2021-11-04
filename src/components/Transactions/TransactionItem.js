import PropTypes from 'prop-types';
import style from './TransactionItem.module.css';

export default function TransactionItem({ id, type, amount, currency }) {
  return (
    <tr>
      <td className={style.tData}>{type}</td>
      <td className={style.tData}>{amount}</td>
      <td className={style.tData}>{currency}</td>
    </tr>
  );
}

TransactionItem.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
