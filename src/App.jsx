import './App.css';
import Profile from './components/Profile/Profile';
import userData from './userData.json';
import FriendList from './components/FriendList/FriendList';
import friends from './friendsData.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './transactions.json';
import Header from './components/AppHeader/Header';

function App() {
  return (
    <>
      <Header />
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
}

export default App;
