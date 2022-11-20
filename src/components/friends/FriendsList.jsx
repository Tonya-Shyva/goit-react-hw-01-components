import PropTypes from 'prop-types';

import FriendItem from './FriendItem';
import css from './FriendsList.module.css';

export default function FriendsList({ friends }) {
  return (
    <ul className={css.friendsList}>
      {friends.map(({ id, avatar, isOnline, name }) => (
        <FriendItem key={id} avatar={avatar} isOnline={isOnline} name={name} />
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
