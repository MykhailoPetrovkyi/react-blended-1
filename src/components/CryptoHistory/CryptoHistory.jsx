import PropTypes from 'prop-types';
import { format } from 'date-fns';
import style from './CryptoHistory.module.css';

const CryptoHistory = ({ items }) => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          <th className={style.th}>№</th>
          <th className={style.th}>PRICE</th>
          <th className={style.th}>AMOUNT</th>
          <th className={style.th}>DATE</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, price, amount, date }, index) => (
          <tr key={id} className={style.tr}>
            <td className={style.td}>{index + 1}</td>
            <td className={style.td}>{price}</td>
            <td className={style.td}>{amount}</td>
            <td className={style.td}>
              {format(new Date(date), 'MM/dd/yyyy, h:mm a')}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CryptoHistory;
