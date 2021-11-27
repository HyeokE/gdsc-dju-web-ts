import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { AlertInnerWrapper, AlertText, AlertWrapper } from './styled';
import { alertState } from '../../../api/hooks/alert';
import './Alert.css';

const variants = {
  active: {
    opacity: 1,
    y: 0,
  },
  unActive: {
    opacity: 0,
  },
};
const Alert = () => {
  const [alert, setAlert] = useRecoilState(alertState);
  const [toggle, setToggle] = useState<boolean>(true);

  useEffect(() => {
    setToggle(alert.alertHandle);
    setTimeout(() => {
      setToggle(false);
    }, 4000);
    setTimeout(() => {
      setAlert({ ...alert, alertHandle: false });
    }, 5000);
  }, []);
  return (
    <AlertWrapper
      variants={variants}
      animate={toggle ? 'active' : 'unActive'}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AlertInnerWrapper className={alert.alertStatus}>
        <AlertText>{alert.alertMessage}</AlertText>
      </AlertInnerWrapper>
    </AlertWrapper>
  );
};

export default Alert;
