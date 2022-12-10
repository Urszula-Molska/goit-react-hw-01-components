import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';
import { TransactionHistory } from './TransactionHistory';
import user from '../files/user.json';
import friends from '../files/friends.json';
import transactions from '../files/transactions.json';
import data from '../files/data.json';
import PropTypes from 'prop-types';

export const App = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 39,
          color: '#010101',
        }}
      >
        <h3>https://github.com/Urszula-Molska/goit-react-hw-01-components</h3>
      </div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload Stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
