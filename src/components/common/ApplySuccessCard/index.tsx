import React from 'react';
import {
  ApplyCardBlueLine,
  ApplyCardContent,
  ApplyCardInner,
  ApplyCardWrapper,
} from './styled';

interface Iprops {
  username?: string;
  email?: string;
  phone?: string;
  position?: string;
}

const ApplySuccessCard = (props: Iprops) => {
  const { username, email, phone, position } = props;
  return (
    <ApplyCardWrapper>
      <ApplyCardBlueLine />
      <ApplyCardInner>
        <ApplyCardContent>이름: {username}</ApplyCardContent>
        <ApplyCardContent>포지션: {position}</ApplyCardContent>
        <ApplyCardContent>이메일: {email}</ApplyCardContent>
        <ApplyCardContent>전화번호: {phone}</ApplyCardContent>
      </ApplyCardInner>
    </ApplyCardWrapper>
  );
};

export default ApplySuccessCard;
