import React from 'react';
import { Link } from 'react-router-dom';

const ScreenList: React.FC = () => {
    return (
        <div className="container">
            <h1>画面一覧</h1>
            <div className="grid">
                <Link to="/screen1"><button className="button">ボタン1</button></Link>
                <Link to="/screen2"><button className="button">ボタン2</button></Link>
                <Link to="/screen3"><button className="button">ボタン3</button></Link>
                <Link to="/weather"><button className="button">ボタン4</button></Link>
            </div>
        </div>
    );
};

export default ScreenList;
