import React from 'react';
import { Spinner } from 'react-rainbow-components';
import Google from '../../../img/GoogleLogo.svg';

const GoogleSpinner = () => {
  return (
    <div>
      <div className="rainbow-p-vertical_xx-large">
        <div className="rainbow-position_relative rainbow-m-vertical_xx-large rainbow-p-vertical_xx-large">
          <Spinner size="x-large" type="arc" variant="brand">
            <img src={Google} />
          </Spinner>
        </div>
      </div>
    </div>
  );
};

export default GoogleSpinner;
