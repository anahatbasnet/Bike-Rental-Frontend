import React from 'react';
import Navbar from './components/Navbar';
import { AppRoutes } from './Routes';

const App = () => {
  return (
    <div >
      <Navbar />
      <AppRoutes />
    </div>
  );
};

export default App;
