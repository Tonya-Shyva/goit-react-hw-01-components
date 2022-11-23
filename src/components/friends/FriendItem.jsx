import PropTypes from 'prop-types';

import {
  FriendCard,
  FriendStatusOnline,
  FriendStatusOffline,
  FriendAvatar,
  FriendName,
} from './friendsStyled';

export default function FriendItem({ avatar, isOnline, name }) {
  return (
    <FriendCard>
      {isOnline ? (
        <FriendStatusOnline></FriendStatusOnline>
      ) : (
        <FriendStatusOffline></FriendStatusOffline>
      )}

      <FriendAvatar src={avatar} />
      <FriendName>{name}</FriendName>
    </FriendCard>
  );
}

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
