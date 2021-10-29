import React from 'react';
import { LayoutContainer } from '../../Layout';

export const Introduce = () => {
  const introduceText =
    'GDSC(Google Developer Student Clubs)은 Google Developers에서 제공하는 프로그램으로, 대학교를 기반으로 하는 개발자 커뮤니티그룹입니다.\n' +
    ' GDSC의 멤버들은 peer-to-peer 학습 환경에서 역량을 키우고 공동체와 지역사회를 위한 솔루션 구축을 목표로 합니다. \n' +
    '현재 GDSCKorea는 21명의 Lead를 주축으로 21개 대학교에 선발되었으며, GDSC DJU에서 활동할 GDSC member를 모집합니다. \n' +
    '코딩에 관심이 있는 모든학부생(재학생, 휴학생) 누구나 참여할 수 있습니다.';
  return (
    <>
      <LayoutContainer>
        <div>
          {introduceText.split('\n').map((line, id) => {
            return (
              <span key={id}>
                {line}
                <br />
              </span>
            );
          })}
        </div>
      </LayoutContainer>
    </>
  );
};
