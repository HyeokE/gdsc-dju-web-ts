import React from 'react';
import {
  ContainerInner,
  LayoutContainer,
  TopMargin,
} from '../../../styles/layouts';
import { MainText, SubCategory } from '../../common/Title/title';
import {
  introduceText,
  workWhenCome,
} from '../../../api/pageData/introduceText';
import BulletList from '../../common/BulletList';

const SectionIntroduce = () => {
  return (
    <LayoutContainer>
      <ContainerInner>
        <TopMargin />
        <SubCategory>Google Developer Student Club 소개</SubCategory>
        {introduceText.split('\n').map((line, id) => {
          return (
            <MainText key={id}>
              {line}
              <br />
            </MainText>
          );
        })}

        <TopMargin />
        <SubCategory>합류하시면 함께할 활동입니다</SubCategory>
        <MainText>
          <BulletList text={workWhenCome} />
        </MainText>
        <TopMargin />
      </ContainerInner>
    </LayoutContainer>
  );
};

export default SectionIntroduce;
