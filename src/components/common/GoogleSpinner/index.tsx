import React, { useEffect, useRef } from 'react';
import { GoogleLoader, LoaderBackground } from './styled';
import lottie from 'lottie-web';

const GoogleSpinner = () => {
  const googleContainer = useRef<HTMLDivElement>(null);
  useEffect(
    () =>
      void lottie.loadAnimation({
        container: googleContainer.current as Element,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('./GoogleAnimation.json'),
      }),
    [],
  );
  return (
    <>
      <LoaderBackground>
        <GoogleLoader ref={googleContainer}></GoogleLoader>
      </LoaderBackground>
    </>
  );
};

export default GoogleSpinner;
