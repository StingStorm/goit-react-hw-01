import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

const FriendList = props => {
  return (
    <div className="section">
      <ul className={css.friendList}>
        {props.friends.map(friend => {
          return (
            <li key={friend.id}>
              <FriendListItem
                avatar={friend.avatar}
                name={friend.name}
                online={friend.isOnline}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FriendList;
