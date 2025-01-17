import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Weather from './Weather'; // 天気画面のコンポーネントをインポート
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
