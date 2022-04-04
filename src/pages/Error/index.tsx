import React from 'react';

const Error = ({ error }: { error: Error }) => {
  return (
    <div>
      something went wrong
      <div>{error.message}</div>
    </div>
  );
};

export default Error;
