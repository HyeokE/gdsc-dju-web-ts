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
const OnboardingLinkBox = ({ name }: string) => {
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
        <LinkDescription>커뮤니케이션, 공지 등</LinkDescription>
      </LinkBoxInner>
    </>
  );
};

export default OnboardingLinkBox;
