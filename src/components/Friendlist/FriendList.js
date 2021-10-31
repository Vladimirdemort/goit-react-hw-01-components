import PropTypes from 'prop-types';
import FriendsTmpl from './FriendsTmpl';

export default function FriendList({ friendItem }) {
  return (
    <ul className="friend-list">
      {friendItem.map(friend => (
        <FriendsTmpl
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
