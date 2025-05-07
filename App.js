// src/App.js
import React from 'react';
import { BrowserRouter }    from 'react-router-dom';
import { AuthProvider }     from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider }    from './context/ThemeContext';
import AppRouter            from './routes/AppRouter';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <LanguageProvider>
          <AuthProvider>
            <AppRouter />
          </AuthProvider>
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
