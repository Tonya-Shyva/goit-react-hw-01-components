import PropTypes from 'prop-types';
import css from './FriendsList.module.css';

export default function FriendItem({ avatar, isOnline, name }) {
  // console.log(css[isOnline]);
  return (
    <li className={css.friendItem}>
      <span className={`${css.friendStatus} ${css[isOnline]}`}></span>
      <img
        className={css.friendAvatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.friendName}>{name}</p>
    </li>
  );
}

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
