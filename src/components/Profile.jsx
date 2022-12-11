import PropTypes from 'prop-types';
import css from '../styles/Profile.module.css';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => (
  <div className={css.profileContainer}>
    <div className={css.profileCard}>
      <div className={css.description}>
        <div className={css.shape}>
          <img src={avatar} alt="User avatar" className={css.avatar} />
        </div>
        <h2 className={css.name}>{username} </h2>
        <p className={css.tag}>{tag}</p>
        <p className={css.tag}>{location}</p>
      </div>
      <ul className={css.stats}>
        <li className={css.statsItem}>
          <span className={css.label}>Followers:</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.label}>Views:</span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.label}>Likes:</span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  </div>
);

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
