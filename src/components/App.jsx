import Profile from './profile/Profile';
import user from './profile/user.json';

import Statistics from './statistics/Statistics';
import statsData from './statistics/data.json';

import FriendList from './friends/FriendsList';
import friends from './friends/friends.json';

import TransactionHistory from './transactions/TransactionHistory';
import transactions from './transactions/transactions.json';

export default function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statsData} />
      <Statistics stats={statsData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

// // для children propTypes не обов'язкові
// App.propTypes = {
//   children: PropTypes.node,
// };
