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
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const FooterTitle = styled.p`
  font-size: 14px;
  font-weight: bold;
`;

export const FooterSubTitle = styled.span`
  display: inline-block;
  font-size: ${(props) => props.theme.fontSize.body3};
  color: ${(props) => props.theme.color.grey600};
`;
export const FooterWrapper = styled.footer`
  display: flex;
  bottom: 0;
  padding: 20px 30px;
  justify-content: space-between;
  align-items: center;
`;
export const FooterLogo = styled.img`
  height: 25px;

  padding-right: 5px;
  @media (max-width: 500px) {
    height: 20px;
  }
`;
export const FooterLogoWrapper = styled.div`
  margin-right: 20px;
`;
export const FooterGDSCLogo = styled.img`
  height: 30px;

  padding-right: 5px;
  @media (max-width: 500px) {
    height: 30px;
  }
`;
