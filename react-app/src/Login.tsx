import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // useNavigate と Link をインポート

interface LoginFormData {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    username: '',
    password: '',
  });
  const [error, setError] = useState<string>('');
  const navigate = useNavigate(); // useNavigateフックを使用

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 簡単なバリデーション
    if (formData.username === '' || formData.password === '') {
      setError('ユーザー名とパスワードを入力してください。');
      return;
    }

    // ログイン処理（例: API呼び出しなど）
    console.log('ログイン情報:', formData);
    setError(''); // エラーをクリア
    alert('ログイン成功!');

    // ログイン成功後に天気画面へ遷移
    navigate('/weather');
  };

  return (
    <div className="login-container">
      <h2>ログイン</h2>

      {/* タブの追加 */}
      <div className="tabs">
        <Link to="/login" className="tab-link">ログイン</Link>
        <Link to="/weather" className="tab-link">天気予報</Link>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">ユーザー名:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password">パスワード:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">ログイン</button>
      </form>
    </div>
  );
};

export default Login;
