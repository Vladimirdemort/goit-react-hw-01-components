import Profile from './components/Profile/Profile';
import FriendList from './components/Friendlist/FriendList';
import TransactionHistory from './components/Transactions/TransactionHistory';
import Statistics from './components/Statistics/StatisticsSection';

import user from './components/Profile/user.json';
import friends from './components/Friendlist/friends.json';
import transactions from './components/Transactions/transactions.json';
import statisticalData from './components/Statistics/statistical-data.json';

export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        photo={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics title="Upload stats" stats={statisticalData} />

      <FriendList friendItem={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
}
