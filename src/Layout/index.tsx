import styled from 'styled-components';

export const LayoutContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  min-width: 320px;
  flex: 1;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.color.gray150};
`;

export const FooterContent = styled.div`
  width: 100%;
  max-width: 1140px;
  padding: 40px;
`;

export const FooterTitle = styled.p`
  font-size: 14px;
  font-weight: bold;
`;

export const FooterSubTitle = styled.span`
  display: inline-block;
  margin-top: 8px;
  font-size: 13px;
`;

export const FooterLogo = styled.img`
  height: 55px;
  padding-right: 5px;
`;
