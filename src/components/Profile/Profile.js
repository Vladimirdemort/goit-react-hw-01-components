import PropTypes from 'prop-types';
import styles from './Profile.module.css';

export default function Profile({
  name,
  tag,
  location,
  photo,
  followers,
  views,
  likes,
}) {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={photo} alt="Аватар пользователя" className={styles.avatar} />
      </div>
      <div>
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  photo: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
