import React from 'react';

interface GenrePopupProps {
  newGenre: string;
  setNewGenre: (genre: string) => void;
  handlePopupSubmit: () => void;
  handlePopupCancel: () => void;
}

const GenrePopup: React.FC<GenrePopupProps> = ({ newGenre, setNewGenre, handlePopupSubmit, handlePopupCancel }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <input
          type="text"
          value={newGenre}
          onChange={(e) => setNewGenre(e.target.value)}
          placeholder="ジャンル名を入力"
        />
        <div className="button-position-popup">
          <button onClick={handlePopupSubmit} className="add-button">追加</button>
          <button onClick={handlePopupCancel} className="cancel-button">キャンセル</button>
        </div>
      </div>
    </div>
  );
};

export default GenrePopup;