import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  max-width: 1064px;
  margin: auto;
  padding: 0 67px;
  box-sizing: border-box;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1140px;
  padding: 10px 0px;
  justify-content: flex-start;
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
export const FooterWrapper = styled.footer`
  display: flex;
  bottom: 0;
  padding: 20px 30px;
  justify-content: center;
  background: #f9fafb;
`;
export const FooterLogo = styled.img`
  height: 25px;

  padding-right: 5px;
  @media (max-width: 500px) {
    height: 20px;
  }
`;
export const FooterLogoWrapper = styled.div`
  margin: 20px 0;
  &:nth-child(2) {
    margin-top: 0px;
  }
`;
export const FooterGDSCLogo = styled.img`
  height: 30px;

  padding-right: 5px;
  @media (max-width: 500px) {
    height: 30px;
  }
`;
