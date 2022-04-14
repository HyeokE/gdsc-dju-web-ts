import React from 'react';
import {
  LinkBox,
  LinkBoxInner,
  LinkDescription,
  LinkLogo,
  LinkLogoWrapper,
} from './styled';
import SlackLogo from '../../../assets/onBoardingImg/slack.svg';

import DiscordLogo from '../../../assets/onBoardingImg/discord.svg';

import NotionLogo from '../../../assets/onBoardingImg/notion.svg';

import { IProps } from '../../../pages/OnBoard/OnboardLink';

const OnboardingLinkBox = (data: IProps) => {
  const name = data.id;
  return (
    <>
      <LinkBox
        whileHover={{
          shadow: '20',
          boxShadow: '0px 0px 10px #4385f3',
        }}
      >
        <LinkBoxInner>
          <LinkLogoWrapper>
            <LinkLogo
              src={
                name === 'slack'
                  ? SlackLogo
                  : name === 'discord'
                  ? DiscordLogo
                  : name === 'notion'
                  ? NotionLogo
                  : ''
              }
            />
          </LinkLogoWrapper>
          <LinkDescription>
            {name === 'slack'
              ? '커뮤니케이션, 공지 등'
              : name === 'discord'
              ? '음성채팅, 스터디, 모각코 등'
              : name === 'notion'
              ? '문서 작성 및 공유'
              : ''}
          </LinkDescription>
        </LinkBoxInner>
      </LinkBox>
    </>
  );
};

export default OnboardingLinkBox;
