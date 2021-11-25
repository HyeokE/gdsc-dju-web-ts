import React, { useEffect } from 'react';
import { useState } from 'react';
import { DateTimePicker } from 'react-rainbow-components';
import { getDbTime } from '../../../../firebase/firebase';
import { SubTitle } from '../../Title/title';
import { DatePickerWrapper } from './styled';

const SettingPage = () => {
  const [startDate, setStartDate] = useState<any>([]);
  const [endDate, setEndDate] = useState<any>([]);

  console.log(startDate);
  console.log(endDate);
  useEffect(() => getDbTime(), []);
  return (
    <>
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
    </>
  );
};

export default SettingPage;
