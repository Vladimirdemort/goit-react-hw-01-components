import PropTypes from 'prop-types';
import Friends from './Friends';
import styles from './FriendList.module.css';

export default function FriendList({ friendItem }) {
  return (
    <ul className={styles.friendList}>
      {friendItem.map(friend => (
        <Friends
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friendItem: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ),
};
