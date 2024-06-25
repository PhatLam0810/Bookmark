import React, { useState, useEffect } from 'react';
import './FavoriteList.css';


const FavoriteList = ({ onFavoriteRemoved }) => {
    const [favorites, setFavorites] = useState([]);
  
    useEffect(() => {
      const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
      setFavorites(storedFavorites);
    }, []);
  
    const handleRemoveFavorite = (id) => {
      const updatedFavorites = favorites.filter(item => item.id !== id);
      setFavorites(updatedFavorites);
  
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  
      // Gọi hàm callback để thông báo ra ngoài rằng một yêu thích đã bị xóa
      if (typeof onFavoriteRemoved === 'function') {
        onFavoriteRemoved(id);
      }
    };
  
    
  

  return (
    <div className="favorite-list-container">
      <h2 className="favorite-list-title">Favorite Stories</h2>
      <ul>
        {favorites.map(item => (
          <li className="favorite-item" key={item.id}>
            {item.name}{' '}
            <button onClick={() => handleRemoveFavorite(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteList;
