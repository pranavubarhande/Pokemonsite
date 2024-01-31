import React from 'react';

const Loader = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999, 
      }}
    >
      <div
        style={{
          border: '8px solid #f3f3f3',
          borderTop: '8px solid #3498db',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          animation: 'spin 1s linear infinite',
        }}
      ></div>
    </div>
  );
};

export default Loader;
