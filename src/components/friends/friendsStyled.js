import styled from 'styled-components';

const StyledFriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 320px;
  list-style: none;
  padding: ${p => p.theme.space[0]};
  margin: ${p => p.theme.space[6]}px auto;

  gap: ${p => p.theme.space[5]}px;
`;

const StyledFriendCard = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[5]}px;
  border: ${p => p.theme.space[1]}px solid rgb(112, 109, 109);
  border-radius: ${p => p.theme.space[4]}px;
  box-shadow: ${p => p.theme.shadow.boxShadow};
`;

const StyledStatusSpanOnline = styled.span`
  width: ${p => p.theme.space[6]}px;
  height: ${p => p.theme.space[6]}px;
  margin-right: ${p => p.theme.space[5]}px;
  border-radius: 50%;
  background-color: green;
`;

const StyledStatusSpanOffline = styled.span`
  width: ${p => p.theme.space[6]}px;
  height: ${p => p.theme.space[6]}px;
  margin-right: ${p => p.theme.space[5]}px;
  border-radius: 50%;
  background-color: red;
`;

const StyledFriendImg = styled.img`
  height: ${p => p.theme.space[8]}px;
  margin-right: ${p => p.theme.space[5]}px;
`;

const SryledFriendName = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  line-height: 1.14;
  font-weight: 600;
`;

export const FriendsList = ({ children }) => {
  return <StyledFriendsList>{children}</StyledFriendsList>;
};

export const FriendCard = ({ children }) => {
  return <StyledFriendCard>{children}</StyledFriendCard>;
};

export const FriendStatusOnline = () => {
  return <StyledStatusSpanOnline></StyledStatusSpanOnline>;
};

export const FriendStatusOffline = () => {
  return <StyledStatusSpanOffline></StyledStatusSpanOffline>;
};

export const FriendAvatar = ({ src }) => {
  return <StyledFriendImg src={src} alt="User avatar" width="48" />;
};

export const FriendName = ({ children }) => {
  return <SryledFriendName>{children}</SryledFriendName>;
};
