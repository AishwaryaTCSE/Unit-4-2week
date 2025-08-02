import React from 'react';

const ThemedBox = ({ theme }) => {
  const styles = {
    box: {
      width: '150px',
      height: '150px',
      borderRadius: '10px',
      backgroundColor: theme === 'light' ? '#f0f0f0' : '#333',
      color: theme === 'light' ? '#000' : '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 0 10px rgba(0,0,0,0.2)',
      transition: 'all 0.3s ease',
    }
  };

  return <div style={styles.box}>{theme === 'light' ? 'Light Box' : 'Dark Box'}</div>;
};

export default ThemedBox;
