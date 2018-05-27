import React from 'react';

export default ({isAuthenticated = false, message = 'Please Login!'}) => {
  if (!isAuthenticated) {
    return (
      <div>{message}</div>
    );
  }
  return null;
}

