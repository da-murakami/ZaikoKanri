import React, { useState } from 'react';
import './InventoryList.css';

// 商品データの型定義
interface Product {
  id: number;
  name: string;
  genre: string;
  image: string;
  count: number;
  isFavorite: boolean;
}

// サンプルデータ
const sampleProducts: Product[] = [
  { id: 1, name: 'カードA', genre: 'ジャンル1', image: '', count: 10, isFavorite: false },
  { id: 2, name: 'カードB', genre: 'ジャンル2', image: '', count: 5, isFavorite: false },
  { id: 3, name: 'カードC', genre: 'ジャンル1', image: '', count: 8, isFavorite: true },
  { id: 4, name: 'カードD', genre: 'ジャンル2', image: '', count: 2, isFavorite: false },
  { id: 5, name: 'カードE', genre: 'ジャンル3', image: '', count: 12, isFavorite: false },
];

const InventoryList = () => {
  const [products, setProducts] = useState<Product[]>(sampleProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [showFavorites, setShowFavorites] = useState(false);

  // 商品をフィルタリングする
  const filteredProducts = products.filter((product) => {
    const matchesName = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre ? product.genre === selectedGenre : true;
    const matchesFavorite = showFavorites ? product.isFavorite : true;
    return matchesName && matchesGenre && matchesFavorite;
  });

  // お気に入りボタンをクリックしたときに状態を更新する
  const toggleFavorite = (productId: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, isFavorite: !product.isFavorite }  // お気に入りの状態を反転
          : product
      )
    );
  };

  return (
    <div className="container">

      {/* 検索フォーム */}
      <div className="search-section">
        <input
          type="text"
          placeholder="カード名検索"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
          <option value="">すべてのジャンル</option>
          <option value="ジャンル1">ジャンル1</option>
          <option value="ジャンル2">ジャンル2</option>
          <option value="ジャンル3">ジャンル3</option>
        </select>
        <button onClick={() => setShowFavorites(!showFavorites)}>
          {showFavorites ? 'お気に入り表示解除' : 'お気に入り表示'}
        </button>
      </div>

      {/* 商品リスト */}
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">□</div>
            <h3>{product.name}</h3>
            <button
              className={`favorite-button ${product.isFavorite ? 'favorite' : ''}`}
              onClick={() => toggleFavorite(product.id)} // ここで状態を更新
            >
              {product.isFavorite ? '★ お気に入り' : '☆ お気に入り'}
            </button>
            <div className="count-section">
              <button>-</button>
              <span>{product.count}</span>
              <button>+</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InventoryList;
