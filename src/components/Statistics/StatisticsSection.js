import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';
import styles from './StatisticsSection.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map(stat => (
          <StatisticsItem
            key={stat.id}
            label={stat.label}
            percent={stat.percentage}
          />
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
    }),
  ),
};
