import React from 'react';
import Plane from '../../../img/Plane.png';
import WhitePlane from '../../../img/WhitePlane.png';
import WhiteGDSC from '../../../img/GDSCWhiteSeeklogo.png';
import GDSC from '../../../img/GDSCSeekLogo.png';
import {
  BoardingPassBottmTextWrapper,
  BoardingPassCategory,
  BoardingPassCategoryText,
  BoardingPassDetailText,
  BoardingPassDetailTitle,
  BoardingPassDetailWrapper,
  BoardingPassElementWrapper,
  BoardingPassFullWrapper,
  BoardingPassGDSC,
  BoardingPassGDSCLogo,
  BoardingPassGDSCWrapper,
  BoardingPassInner,
  BoardingPassPlaneImg,
  BoardingPassTopLine,
  BoardingPassTopTextWrapper,
  BoardingPassWrapper,
  BoardingTicketBottomElementWrapper,
  BoardingTicketBr,
  BoardingTicketCategory,
  BoardingTicketCategoryText,
  BoardingTicketDetailText,
  BoardingTicketDetailWrapper,
  BoardingTicketElementWrapper,
  BoardingTicketGDSC,
  BoardingTicketGDSCWrapper,
  BoardingTicketInner,
  BoardingTicketPlane,
  BoardingTicketWrapper,
} from './styled';

const BoardingPass = () => {
  return (
    <>
      <BoardingPassFullWrapper>
        <BoardingPassWrapper>
          <BoardingPassTopLine />
          <BoardingPassInner>
            <BoardingPassGDSCWrapper>
              <BoardingPassGDSCLogo src={GDSC} />
              <BoardingPassGDSC>
                Google Developer Student Clubs
              </BoardingPassGDSC>
            </BoardingPassGDSCWrapper>
            <BoardingPassTopTextWrapper>
              <BoardingPassElementWrapper>
                <BoardingPassDetailTitle>
                  Boarding Details
                </BoardingPassDetailTitle>
                <BoardingPassDetailWrapper>
                  <BoardingPassDetailText>NWB</BoardingPassDetailText>
                  <BoardingPassPlaneImg src={Plane} />
                  <BoardingPassDetailText>DJU</BoardingPassDetailText>
                </BoardingPassDetailWrapper>
              </BoardingPassElementWrapper>
              <BoardingPassElementWrapper style={{ marginLeft: '73px' }}>
                <BoardingPassCategory>Name</BoardingPassCategory>
                <BoardingPassCategoryText>Jason</BoardingPassCategoryText>
              </BoardingPassElementWrapper>
            </BoardingPassTopTextWrapper>
            <BoardingPassBottmTextWrapper>
              <BoardingPassElementWrapper>
                <BoardingPassCategory>Season</BoardingPassCategory>
                <BoardingPassCategoryText>1 th</BoardingPassCategoryText>
              </BoardingPassElementWrapper>
              <BoardingPassElementWrapper>
                <BoardingPassCategory>Boarding Time</BoardingPassCategory>
                <BoardingPassCategoryText>
                  2021. 01. 13
                </BoardingPassCategoryText>
              </BoardingPassElementWrapper>
              <BoardingPassElementWrapper>
                <BoardingPassCategory>Arrival Time</BoardingPassCategory>
                <BoardingPassCategoryText>2022. 08</BoardingPassCategoryText>
              </BoardingPassElementWrapper>
            </BoardingPassBottmTextWrapper>
          </BoardingPassInner>
        </BoardingPassWrapper>
        <BoardingTicketWrapper>
          <BoardingTicketInner>
            <BoardingTicketGDSCWrapper>
              <BoardingPassGDSCLogo src={WhiteGDSC} />
              <BoardingTicketGDSC>
                Google Developer Student Clubs
              </BoardingTicketGDSC>
            </BoardingTicketGDSCWrapper>
            <BoardingTicketDetailWrapper>
              <BoardingTicketDetailText>NWB</BoardingTicketDetailText>
              <BoardingTicketPlane src={WhitePlane} />
              <BoardingTicketDetailText>DJU</BoardingTicketDetailText>
            </BoardingTicketDetailWrapper>
            <BoardingTicketBr />
            <BoardingTicketElementWrapper>
              <BoardingTicketCategory>Name</BoardingTicketCategory>
              <BoardingTicketCategoryText>Harry</BoardingTicketCategoryText>
            </BoardingTicketElementWrapper>
            <BoardingTicketBottomElementWrapper>
              <BoardingTicketElementWrapper>
                <BoardingTicketCategory>Boarding Time</BoardingTicketCategory>
                <BoardingTicketCategoryText>
                  2021. 1. 13
                </BoardingTicketCategoryText>
              </BoardingTicketElementWrapper>
              <BoardingTicketElementWrapper>
                <BoardingTicketCategory>Arrival Time</BoardingTicketCategory>
                <BoardingTicketCategoryText>2022. 8</BoardingTicketCategoryText>
              </BoardingTicketElementWrapper>
            </BoardingTicketBottomElementWrapper>
          </BoardingTicketInner>
        </BoardingTicketWrapper>
      </BoardingPassFullWrapper>
    </>
  );
};

export default BoardingPass;
