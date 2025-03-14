import React from 'react';
import { Link } from 'react-router-dom';

const Tab: React.FC = () => {
  return (
    <nav className="tab-bar">
      <ul className="tab-list">
        <li className="tab-item">
          <Link to="/home" className="tab-link">予備</Link>
        </li>
        <li className="tab-item">
          <Link to="/weather" className="tab-link">天気</Link>
        </li>
        <li className="tab-item">
          <Link to="/cardRegistration" className="tab-link">カード登録</Link>
        </li>
        <li className="tab-item">
          <Link to="/InventoryList" className="tab-link">在庫一覧</Link>
        </li>
        <li className="tab-item">
          <Link to="/profile" className="tab-link">予備</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Tab;