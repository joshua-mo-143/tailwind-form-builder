import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AllPages from './pages/AllPages';

export const App: React.FC = () => {

  return (
    <BrowserRouter>
    <AllPages/>
    </BrowserRouter>
  )
}

export default App
