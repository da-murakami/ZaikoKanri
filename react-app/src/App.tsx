import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Login from './Login';
import Weather from './Weather';
import CardRegistration from './CardRegistration';
import InventoryList from './InventoryList';
import Tab from './Tab';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <TabControl />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/cardRegistration" element={<CardRegistration />} />
        <Route path="/InventoryList" element={<InventoryList />} />
      </Routes>
    </Router>
  );
};

// Tabの表示を制御するコンポーネント
const TabControl: React.FC = () => {
  const location = useLocation();

  // ログインページ (/login) やトップページ (/) ではTabを非表示にする
  if (location.pathname === "/login" || location.pathname === "/") {
    return null;  // Tabは表示しない
  }

  // それ以外のページではTabを表示
  return <Tab />;
};

export default App;