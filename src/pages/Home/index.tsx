import React from 'react';
import { LayoutContainer } from '../../Layout';

export const Home = () => {
  return (
    <LayoutContainer>
      <video
        style={{
          display: 'fixed',
          width: '100%',

          background: 'white',
          position: 'relative',
        }}
        autoPlay
        muted={true}
        playsInline={true}
      >
        <source src={process.env.PUBLIC_URL + './mainVideo.mp4'} />
      </video>
    </LayoutContainer>
  );
};
