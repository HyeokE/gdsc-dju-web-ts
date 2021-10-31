import React from 'react';
import { LayoutContainer, TopMargin } from '../../Layout';
import { Title } from '../../components/common/Title/title';
import { VideoWrapper, StyledVideo } from './styled';
import styled from 'styled-components';

const StyledTitleWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Home = () => {
  return (
    <>
      <VideoWrapper>
        <StyledVideo autoPlay muted={true} playsInline={true}>
          <source src={process.env.PUBLIC_URL + './mainVideo.mp4'} />
        </StyledVideo>
      </VideoWrapper>
      <StyledTitleWrapper>
        <div style={{ marginTop: '200px' }}>
          {/*<Title>우리는 GDSC입니다</Title>*/}
        </div>
      </StyledTitleWrapper>
      <LayoutContainer></LayoutContainer>
      <TopMargin style={{ height: '1000px' }} />
    </>
  );
};
