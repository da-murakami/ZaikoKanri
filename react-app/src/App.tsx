import React, { useState } from 'react';
import './App.css';
import EditProduct from './EditProduct';

// 商品の型定義
interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "ワイヤレスマウス", price: 1000, inStock: true },
    { id: 2, name: "アウトドアチェア コンパクトイエローカラー", price: 2000, inStock: false },
  ]);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>("");

  /*
    既存製品のID値のうち最大+1を返却する.
    backendと連携している場合、新規PK払い出し等をするが
    今回の研修ではbackendとの繋ぎがないための処理.
  */
  const getNextProductId = () => {
    if (products.length === 0) {
      return 1;
    }
    const maxId = Math.max(...products.map(product => product.id));
    return maxId + 1;
  };

  // 商品追加
  const handleAddProduct = () => {
    const newProduct: Product = {
      id: getNextProductId(),
      name: `製品サンプル ${getNextProductId()}`,
      price: 1000,
      inStock: true,
    };
    setProducts([...products, newProduct]);
    setErrorMsg("")
  };

  // 商品削除
  const handleDeleteProduct = (id: number) => {
    if (products.length === 1) {
      setErrorMsg("最後の一つとなる製品は削除できません.")
      return;
    }
    setProducts(products.filter(product => product.id !== id));
    setErrorMsg("")
  };

  // 商品の編集を開始（子コンポーネントにデータを渡す）
  const handleEditProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  // 子コンポーネントから編集内容を受け取り、商品を更新
  const handleUpdateProduct = (updatedProduct: Product) => {
    setProducts(products.map(product => 
      product.id === updatedProduct.id ? updatedProduct : product
    ));
    setSelectedProduct(null); // 編集後に選択を解除
  };

  // 価格をカンマ区切りにして返却
  const formatYen = (price:number) => {
    return price.toLocaleString('en-US');
  };

  return (
    <div className="app-container">
      <h1>在庫管理システム</h1>

      <button onClick={handleAddProduct}>製品の追加</button>
      <div className="product-list">
        <h2>在庫一覧</h2>
        {/* 削除できない場合のエラーメッセージ */}
        {errorMsg && <p className="error-message">{errorMsg}</p>}
        <ul>
          {products.map(product => (
            <li key={product.id} className="product-item">
              <span className="name">{product.name}</span>
              <span className="price">￥{formatYen(product.price)}</span> {/* 価格カンマ区切り */}
              <span className="stock"> {product.inStock ? '在庫アリ' : '在庫ナシ'}</span>
              <button onClick={() => handleEditProduct(product)}>編集</button>
              <button onClick={() => handleDeleteProduct(product.id)}>削除</button>
            </li>
          ))}
        </ul> 
      </div>

      {selectedProduct && (
        <EditProduct 
          product={selectedProduct} 
          onUpdateProduct={handleUpdateProduct} 
        />
      )}
    </div>
  );
};

export default App;
