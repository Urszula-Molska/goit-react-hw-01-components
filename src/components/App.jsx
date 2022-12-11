import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';
import { TransactionHistory } from './TransactionHistory';
import user from '../files/user.json';
import friends from '../files/friends.json';
import transactions from '../files/transactions.json';
import data from '../files/data.json';
import css from '../styles/APP.module.css';

export const App = () => {
  return (
    <>
      <div className={css.container}>
        <div className={css.section}>
          <a
            className={css.repo}
            href="https://github.com/Urszula-Molska/goit-react-hw-01-components"
          >
            https://urszula-molska.github.io/goit-react-hw-01-components/
          </a>
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
      </div>
    </>
  );
};
