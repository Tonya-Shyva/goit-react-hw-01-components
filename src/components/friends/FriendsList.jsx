import PropTypes from 'prop-types';

import FriendItem from './FriendItem';
import { FriendsList } from './friendsStyled';

export default function FriendList({ friends }) {
  return (
    <FriendsList>
      {friends.map(({ id, avatar, isOnline, name }) => (
        <FriendItem key={id} avatar={avatar} isOnline={isOnline} name={name} />
      ))}
    </FriendsList>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
