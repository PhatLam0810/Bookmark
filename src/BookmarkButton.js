import React, { useState, useEffect } from 'react';

const BookmarkButton = ({ story, onToggleFavorite }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // Kiểm tra xem story đã được đánh dấu là yêu thích hay chưa
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
      favorites.push({ id: story.id, name: story.name });
      setIsFavorite(true);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));

    // Gọi hàm callback để thông báo ra ngoài rằng có sự thay đổi trong yêu thích
    if (typeof onToggleFavorite === 'function') {
      onToggleFavorite();
    }
  };

  // Cập nhật trạng thái yêu thích khi component được render
  useEffect(() => {
    setIsFavorite(checkIsFavorite());
  }, []);

  return (
    <button onClick={handleFavorite}>
      {isFavorite ? 'Xóa khỏi yêu thích' : 'Thêm vào yêu thích'}
    </button>
  );
};

export default BookmarkButton;
