import React, { useState, useEffect } from 'react';

const FavoriteList = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Lấy dữ liệu từ localStorage vào ban đầu
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const handleRemoveFavorite = (id) => {
    // Cập nhật state favorites bằng cách lọc ra các phần tử khác với id được chọn
    const updatedFavorites = favorites.filter(item => item.id !== id);
    setFavorites(updatedFavorites); // Cập nhật state mới

    // Cập nhật localStorage với danh sách mới đã xóa phần tử
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <h2>Favorite Stories</h2>
      <ul>
        {favorites.map(item => (
          <li key={item.id}>
            {item.title}{' '}
            <button onClick={() => handleRemoveFavorite(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteList;
