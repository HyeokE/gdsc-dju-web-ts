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
  width: 92%;
  margin: 0 auto;
`;
export const CardList = styled(motion.section)`
  display: flex;
  flex-wrap: wrap;
`;

export const BannerImage = styled.img`
  height: 500px;
`;
export const NavigationBlock = styled.div`
  height: 60px;
  width: 100%;
`;
export const BannerWrapper = styled.div`
  height: 200px;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  @media (max-width: 500px) {
    height: 180px;
  }
`;
