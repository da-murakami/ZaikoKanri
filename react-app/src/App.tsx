import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Weather from './Weather'; // 天気画面のコンポーネントをインポート
import ScreenList from './ScreenList'; // 画面一覧画面
import Screen1 from './Screen1'; // 一覧画面
import Screen2 from './Screen2'; // 詳細画面
import Screen3 from './Screen3'; // 在庫登録画面
import Screen4 from './Screen4'; // 天気画面
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/screenlist" element={<ScreenList />} />
        <Route path="/screen1" element={<Screen1 />} />
        <Route path="/screen2" element={<Screen2 />} />
        <Route path="/screen3" element={<Screen3 />} />
        <Route path="/screen4" element={<Screen4 />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
