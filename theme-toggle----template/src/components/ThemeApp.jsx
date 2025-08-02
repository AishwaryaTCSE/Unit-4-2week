import React, { useState, useEffect } from 'react';
import ThemedBox from './ThemedBox';

const ThemeApp = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('app-theme') || 'light';
  });

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Theme Toggle App</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
        <ThemedBox theme={theme} />
        <ThemedBox theme={theme} />
        <ThemedBox theme={theme} />
      </div>
    </div>
  );
};

export default ThemeApp;
