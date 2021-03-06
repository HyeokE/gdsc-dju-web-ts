import styled from 'styled-components';

export const StyledMemberCard = styled.div`
  margin-bottom: 20px;
  width: 200px;
`;
export const NickName = styled.div`
  font-family: 'Gothic A1', sans-serif;
  font-size: 2rem;
  margin-top: 22px;
`;
export const Skeleton = styled.div`
  height: 200px;
  width: 200px;
  background: ${(props) => props.theme.color.grey50};
`;
export const Name = styled.div`
  font-family: 'Gothic A1', sans-serif;
  font-size: 1.3rem;
  margin-top: 10px;
  color: #aaaaaa;
`;
export const Role = styled.div`
  color: ${(props) => props.theme.color.googleBlue};
  font-family: 'Gothic A1', sans-serif;
  font-size: 1.3rem;
  margin-top: 10px;
`;
export const MemberImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  border: 1px solid ${(props) => props.theme.color.grey500};
`;
