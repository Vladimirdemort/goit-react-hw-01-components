import PropTypes from 'prop-types';

export default function FriendsTmpl({ avatar, name, isOnline }) {
  return (
    <li className="item">
      <span className="status">{isOnline ? 'online' : 'offline'}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendsTmpl.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
