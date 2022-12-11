import PropTypes from 'prop-types';
import css from '../styles/FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      {isOnline ? (
        <span style={{ backgroundColor: 'green' }} className={css.status}>
          {isOnline}{' '}
        </span>
      ) : (
        <span style={{ backgroundColor: 'red' }} className={css.status}>
          {isOnline}
        </span>
      )}

      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
