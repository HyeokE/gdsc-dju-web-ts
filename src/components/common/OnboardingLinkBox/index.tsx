import React from 'react';
import {
  LinkBoxInner,
  LinkDescription,
  LinkLogo,
  LinkLogoWrapper,
  LinkText,
} from './styled';
import SlackLogo from '../../../img/Link/SlackLogo.png';
import SlackText from '../../../img/Link/SlackText.png';
import DiscordLogo from '../../../img/Link/DiscordLogo.png';
import DiscordText from '../../../img/Link/DiscordText.png';
import NotionLogo from '../../../img/Link/NotionLogo.png';
import NotionText from '../../../img/Link/NotionText.png';
import { IProps } from '../../../pages/OnBoarding/OnboardingLinks';
const OnboardingLinkBox = (data: IProps) => {
  const name = data.id;
  const link = data.link;
  return (
    <>
      <LinkBoxInner whileHover={{ backgroundColor: '#efefef' }}>
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
          <LinkText
            src={
              name === 'slack'
                ? SlackText
                : name === 'discord'
                ? DiscordText
                : name === 'notion'
                ? NotionText
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
    </>
  );
};

export default OnboardingLinkBox;
