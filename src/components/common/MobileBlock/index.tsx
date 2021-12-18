import React from 'react';
import { MobileText, MobileTextWrapper } from './styled';

const MobileBlock = () => {
  return (
    <div>
      <MobileTextWrapper>
        <MobileText>PC 환경에 최적화 되어 있습니다.</MobileText>
        <MobileText>PC 에서 다시 실행해주세요!</MobileText>
        <MobileText>(권장 해상도 : 1920 X 1080)</MobileText>
      </MobileTextWrapper>
    </div>
  );
};

export default MobileBlock;
