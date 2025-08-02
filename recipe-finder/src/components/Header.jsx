import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';


const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header>
      <h1>Recipe Finder</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </header>
  );
};

export default Header;
