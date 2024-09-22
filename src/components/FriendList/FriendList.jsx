import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = props => {
  return (
    <ul>
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
  );
};

export default FriendList;
