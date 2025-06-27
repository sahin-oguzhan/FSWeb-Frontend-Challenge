import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { LanguageProvider } from './contexts/LanguageContext.jsx';
import { ThemeProvider } from './contexts/ThemeContext.jsx';

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </ThemeProvider>,
);
