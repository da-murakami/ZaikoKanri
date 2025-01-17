import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Weather.css'; // CSSファイルをインポート

const Weather: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const leftImages = ['/image/oamesyoki_.jpg', '/image/d6dlsyg-52f89407-773a-464f-93d3-4648cc91f3fb.jpg'];  // 左側の画像
  const rightImages = ['/image/d6dlsyg-52f89407-773a-464f-93d3-4648cc91f3fb.jpg', '/image/red_eyes_b__dragon__v2_by_kingofgamesoricards_dfb15z7-fullview.png']; // 右側の画像

  const [leftImageIndex, setLeftImageIndex] = useState(0);  // 左側の画像のインデックス
  const [rightImageIndex, setRightImageIndex] = useState(0);  // 右側の画像のインデックス

  useEffect(() => {
    // 天気データ取得
    const apiUrl = 'https://weather.tsukumijima.net/api/forecast?city=130010';

    axios
      .get(apiUrl)
      .then((response) => {
        setWeatherData(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError('天気データの取得に失敗しました。');
        setLoading(false);
      });

    // 画像の切り替え処理
    const interval = setInterval(() => {
      setLeftImageIndex((prevIndex) => (prevIndex + 1) % leftImages.length); // 左側画像のインデックスを切り替え
      setRightImageIndex((prevIndex) => (prevIndex + 1) % rightImages.length); // 右側画像のインデックスを切り替え
    }, 3000); // 2秒ごとに画像を切り替え（アニメーションの長さと同期）

    // コンポーネントのアンマウント時にインターバルをクリア
    return () => clearInterval(interval);
  }, []);  // 最初の一回だけ実行

  return (
    <div className="weather-container">
      <header className="weather-header">
        <div className="header-content">
          {/* 左側の画像 */}
          <img
            src={leftImages[leftImageIndex]}  // 画像のインデックスに基づいて切り替える
            alt="左画像"
            className="side-image"
          />
          <h1 className="weather-title">お天気</h1>
          {/* 右側の画像 */}
          <img
            src={rightImages[rightImageIndex]}  // 画像のインデックスに基づいて切り替える
            alt="右画像"
            className="side-image"
          />
        </div>
      </header>

      <main className="weather-main">
        <h2 className="weather-description">
          今週の天気予報をお届け！（{weatherData?.location.city ?? '不明'}）
        </h2>

        {loading && <p>データを読み込み中...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {weatherData && weatherData.forecasts && (
          <div className="forecast-container">
            {weatherData.forecasts.map((forecast, index) => (
              <div key={index} className="forecast-card">
                <h3>{forecast.date}</h3>
                <img
                  src={forecast.image.url}
                  alt={forecast.telop}
                  className="forecast-icon"
                />
                <p>{forecast.telop}</p>
                <p>
                  <span className="temperature-min">
                    {forecast.temperature.min?.celsius ?? '--'}℃ 
                  </span>
                  /
                  <span className="temperature-max">
                    {forecast.temperature.max?.celsius ?? '--'}℃
                  </span>
                </p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Weather;
