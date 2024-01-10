import React from 'react';

const Heatmap = () => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh' 
  }}>
      <iframe src="main.html" style={{ width: '100vw', height: '100vh', border: 'none' }}></iframe>
    </div>
  );
};

export default Heatmap;