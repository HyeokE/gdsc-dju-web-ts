import React, { useEffect } from 'react';
import { useState } from 'react';
import { DateTimePicker } from 'react-rainbow-components';
import { SubTitle } from '../../../components/common/Title/title';
import { getDbTime } from '../../../firebase/firebase';

import {
  CalendarWrapper,
  DatePickerWrapper,
  DateStatusText,
  SettingInner,
  StatusWrapper,
} from './styled';

const AdminSetting = () => {
  const [startDate, setStartDate] = useState<any>([]);
  const [endDate, setEndDate] = useState<any>([]);

  console.log(startDate);
  console.log(endDate);
  useEffect(() => getDbTime(), []);
  return (
    <>
      <SettingInner>
        {/*<StatusWrapper>*/}
        {/*  <DateStatusText>2021.10.30 12:00AM</DateStatusText>*/}
        {/*  <DateStatusText>2021.10.30 12:00AM</DateStatusText>*/}
        {/*</StatusWrapper>*/}
        <CalendarWrapper>
          <SubTitle>모집 시작일</SubTitle>
          <DatePickerWrapper>
            <DateTimePicker
              value={startDate}
              selectionType="range"
              formatStyle="large"
              variant="single"
              onChange={(e) => setStartDate(e)}
              className="rainbow-m-around_small"
              style={{ borderRadius: '8px' }}
            />
          </DatePickerWrapper>
          <SubTitle>모집 마감일</SubTitle>
          <DatePickerWrapper>
            <DateTimePicker
              selectionType="range"
              formatStyle={'large'}
              variant="single"
              value={endDate}
              onChange={(e) => setEndDate(e)}
              className="rainbow-m-around_small"
              style={{ borderRadius: '8px' }}
            />
          </DatePickerWrapper>
        </CalendarWrapper>
      </SettingInner>
    </>
  );
};

export default AdminSetting;
