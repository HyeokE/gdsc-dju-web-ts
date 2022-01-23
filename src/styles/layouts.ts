import { motion } from 'framer-motion';
import styled from 'styled-components';

export const TopMargin = styled.div`
  height: 50px;
  @media (max-width: 500px) {
    height: 30px;
  }
`;
export const SmallTopMargin = styled.div`
  height: 30px;
`;

export const Tage = styled.div``;

export const LayoutContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  min-width: 320px;
`;
export const ContainerInner = styled.div`
  padding: 0 20px;
`;
export const CardList = styled(motion.section)`
  display: flex;
  flex-wrap: wrap;
`;

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
  justify-content: center;
  padding: 20px 30px;
  background: #f9fafb;
`;
export const FooterLogo = styled.img`
  width: 200px;
  padding-right: 5px;

  @media (max-width: 320px) {
    width: 150px;
  }
`;
export const FooterGDSCLogo = styled.img`
  width: 300px;
  padding-right: 5px;
  @media (max-width: 320px) {
    width: 250px;
  }
`;
export const BannerImage = styled.img`
  height: 500px;
`;
export const BannerWrapper = styled.div`
  height: 200px;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  @media (max-width: 500px) {
    height: 150px;
  }
`;
