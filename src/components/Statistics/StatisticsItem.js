import PropTypes from 'prop-types';
import styles from './StatisticsItem.module.css';

export default function StatisticsItem({ label, percent }) {
  return (
    <li className={styles.item}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percent}%</span>
    </li>
  );
}

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percent: PropTypes.number,
};
