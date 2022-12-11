import { FriendListItem } from './FriendListItem';
import PropTypes from 'prop-types';
//import css from '../styles/FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.id}
        />
      ))}
    </ul>
  );
};
FriendList.propTypes = {
  friends: PropTypes.array,
};
