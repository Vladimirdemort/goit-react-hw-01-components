import PropTypes from 'prop-types';

export default function StatisticsItem({ label, percent }) {
  return (
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percent}</span>
    </li>
  );
}

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percent: PropTypes.number,
};
