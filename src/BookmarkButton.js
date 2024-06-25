// BookmarkButton.js
import React, { useState } from 'react';

const BookmarkButton = ({ story, onToggleFavorite }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // Kiểm tra xem story đã được bookmark hoặc favorite chưa
  const checkIsFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    return favorites.some(item => item.id === story.id);
  };

  const handleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (isFavorite) {
      favorites = favorites.filter(item => item.id !== story.id);
      setIsFavorite(false);
    } else {
      favorites.push({ id: story.id, title: story.title });
      setIsFavorite(true);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));

    // Gọi hàm callback để thông báo cho App component biết rằng có sự thay đổi yêu thích
    onToggleFavorite();
  };

  // Cập nhật trạng thái yêu thích khi component được render
  useState(() => {
    setIsFavorite(checkIsFavorite());
  }, []);

  return (
    <button onClick={handleFavorite}>
      {isFavorite ? 'Remove Favorite' : 'Add Favorite'}
    </button>
  );
};

export default BookmarkButton;
