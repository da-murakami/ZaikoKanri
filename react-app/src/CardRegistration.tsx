import React, { useState, useRef } from 'react';
import './CardRegistration.css';
import TextBoxWithLabel from './utils/TextBoxWithLabel';
import DropDownWithLabel from './utils/DropDownWithLabel';
import TextAreaWithLabel from './utils/TextAreaWithLabel';
import GenrePopup from './utils/GenrePopup';

const CardRegistration: React.FC = () => {
  const [cardKanaInput, setCardKanaInput] = useState("");
  const [cardNameInput, setCardNameInput] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [cardCount, setCardCount] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [newGenre, setNewGenre] = useState("");
  const [options, setOptions] = useState(["-"]);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleCardKanaInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCardKanaInput(event.target.value);
  };

  const handleCardNameInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCardNameInput(event.target.value);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleCardCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCardCount(event.target.value);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedFileName(file.name);
      console.log(`選択されたファイル: ${file.name}`);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert(`カード名カナ: ${cardKanaInput}\nカード名: ${cardNameInput}\nジャンル: ${selectedOption}\n登録カード枚数: ${cardCount}\n説明文: ${description}`);
  };

  const handleAddGenre = () => {
    setIsPopupOpen(true);
  };

  const handlePopupSubmit = () => {
    if (newGenre) {
      setOptions([...options, newGenre]);
      setNewGenre("");
    }
    setIsPopupOpen(false);
  };

  const handlePopupCancel = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="cardRegistration-container">
      <form onSubmit={handleSubmit}>
        <TextBoxWithLabel
          label="カード名カナ："
          value={cardKanaInput}
          onChange={handleCardKanaInputChange}
          className="textbox-with-margin"
        />
        <TextBoxWithLabel
          label="カード名："
          value={cardNameInput}
          onChange={handleCardNameInputChange}
          className="textbox-with-margin"
        />
        <div className="dropdown-with-button margin-top-bottom">
          <DropDownWithLabel
            label="ジャンル："
            value={selectedOption}
            onChange={handleSelectChange}
            options={options}
          />
          <button type="button" onClick={handleAddGenre} className="button genre-container">
            ジャンル登録
          </button>
        </div>
        <TextBoxWithLabel
          label="登録カード枚数："
          value={cardCount}
          onChange={handleCardCountChange}
          className="textbox-with-margin"
        />
        <TextAreaWithLabel
          label="説明："
          value={description}
          onChange={handleDescriptionChange}
          className="textbox-with-margin"
        />
        <div className="file-upload-container">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="file-input"
            style={{ display: 'none' }} // input要素を非表示にする
          />
          <button
            type="button"
            onClick={() => fileInputRef.current && fileInputRef.current.click()}
            className="file-upload-button"
          >
            ファイル選択
          </button>
          {selectedFileName && <p className="file-name">選択されたファイル: {selectedFileName}</p>}
        </div>
        <div className="button-container">
          <button type="submit" className="button">カード登録</button>
        </div>
      </form>
      {isPopupOpen && (
        <GenrePopup
          newGenre={newGenre}
          setNewGenre={setNewGenre}
          handlePopupSubmit={handlePopupSubmit}
          handlePopupCancel={handlePopupCancel}
        />
      )}
    </div>
  );
};

export default CardRegistration;