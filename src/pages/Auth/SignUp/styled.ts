import styled from 'styled-components';

export const AuthBackground = styled.div<any>`
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.route});
  background-position: center;
  display: flex;
  flex-direction: row-reverse;
`;
export const AuthBoxWrapper = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  align-items: center;
`;
export const AuthBoxInner = styled.div`
  padding: 50px 60px;
  background: white;
  border: 0 solid;
  border-radius: 10px;
`;
export const GDSCLogoImage = styled.img`
  height: 17px;
  margin-right: 15px;
`;
export const AuthElementWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 22px;
`;
export const AuthTitle = styled.h1`
  font-size: 3.2rem;
  font-weight: bold;
`;
export const AuthSubTitle = styled.h4`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${(props) => props.theme.color.grey600};
  margin-right: 10px;
`;
export const AuthLinkText = styled.a`
  font-size: 1.6rem;
  font-weight: bold;
  color: ${(props) => props.theme.color.tossBlue};
  margin-right: 10px;
  &:hover {
    cursor: pointer;
  }
`;
export const AuthLogoText = styled.div<any>`
  font-size: 1.6rem;
  font-weight: ${(props) => props.border};
  margin-right: 5px;
`;
