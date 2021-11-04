import PropTypes from 'prop-types';
import styles from './Friends.module.css';

export default function Friends({ avatar, name, isOnline }) {
  return (
    <li className={styles.item}>
      <span
        className={styles.status}
        style={{ color: isOnline ? 'green' : 'red' }}
      >
        {isOnline ? 'online' : 'offline'}
      </span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

Friends.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

console.log(styles);
