import { FriendListItem } from './FriendListItem';
import PropTypes from 'prop-types';
import css from '../styles/FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <section className={css.friendlist_container}>
      <ul className={css.friendList}>
        {friends.map(friend => (
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            key={friend.id}
          />
        ))}
      </ul>
    </section>
  );
};

friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
};
