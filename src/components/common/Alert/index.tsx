import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { AlertInnerWrapper, AlertText, AlertWrapper } from './styled';
import { alertState } from '../../../store/alert';
import './Alert.css';
import { AnimatePresence } from 'framer-motion';

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
  }, []);
  return (
    <AnimatePresence>
      {toggle && (
        <AlertWrapper
          variants={variants}
          exit={'unActive'}
          animate={'active'}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AlertInnerWrapper className={alert.alertStatus}>
            <AlertText>{alert.alertMessage}</AlertText>
          </AlertInnerWrapper>
        </AlertWrapper>
      )}
    </AnimatePresence>
  );
};

export default Alert;
