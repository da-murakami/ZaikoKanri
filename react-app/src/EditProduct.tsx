import React, { useState } from 'react';
import { Product } from './App';

// プロパティの型定義
interface EditProductProps {
  product: Product; // App.tsxの商品の型定義
  onUpdateProduct: (updatedProduct: Product) => void;
}

const EditProduct: React.FC<EditProductProps> = ({ product, onUpdateProduct }) => {
  const [name, setName] = useState<string>(product.name);
  const [price, setPrice] = useState<number>(product.price);
  const [inStock, setInStock] = useState<boolean>(product.inStock);

  /*
    保存ボタン押下時処理.
    編集した各値の状態(製品名、価格、在庫有無)を基にオブジェクトを生成し、
    親コンポーネント(今回の場合App.tsx)へデータを受け渡す.

  */
  const handleSave = () => {
    const updatedProduct = { ...product, name, price, inStock };
    onUpdateProduct(updatedProduct); // 親コンポーネントへ編集結果を送信
  };

  return (
    <div className="edit-product-form">
      <h3>製品情報の編集</h3>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="製品名"
      />
      <input
        type="number"
        value={price}
        onChange={e => setPrice(Number(e.target.value))}
        placeholder="金額"
      />
      <label>
        在庫アリ:
        <input
          type="checkbox"
          checked={inStock}
          onChange={e => setInStock(e.target.checked)}
        />
      </label>
      <button onClick={handleSave}>保存</button>
    </div>
  );
};

export default EditProduct;
