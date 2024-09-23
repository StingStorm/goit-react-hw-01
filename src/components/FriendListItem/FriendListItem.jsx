import css from './FriendListItem.module.css';

const FriendListItem = props => {
  return (
    <div className={css.friendCard}>
      <img src={props.avatar} alt="Avatar" width="62" />
      <p>{props.name}</p>
      <p className={props.online ? css.isOnline : css.isOffline}>
        {props.online ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;
