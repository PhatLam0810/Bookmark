// App.js
import React, { useState } from 'react';
import BookmarkButton from './BookmarkButton';
import FavoriteList from './FavoriteList';

const App = () => {
  const [favoritesChanged, setFavoritesChanged] = useState(false);
  const stories = [
    {
      id: '1',
      title: 'Example Story 1',
      content: 'This is the content of example story 1.'
    },
    {
      id:  '2',
      title: 'Example Story 2',
      content: 'This is the content of example story 2.'
    },
    {
      id: '3',
      title: 'Example Story 3',
      content: 'This is the content of example story 3.'
    },
    {
      id: '4',
      title: 'Example Story 4',
      content: 'This is the content of example story 4.'
    }
  ];

  // Callback function để cập nhật trạng thái thay đổi yêu thích
  const handleFavoritesChanged = () => {
    setFavoritesChanged(!favoritesChanged); // Đảo ngược giá trị để trigger re-render
  };

  return (
    <div>
      <h2>Story List</h2>
      <ul>
        {stories.map(story => (
          <li key={story.id}>
            {story.title}
            <BookmarkButton story={story} onToggleFavorite={handleFavoritesChanged} />
          </li>
        ))}
      </ul>
      <hr />
      <FavoriteList key={favoritesChanged.toString()} /> {/* Pass key để force re-render */}
    </div>
  );
};

export default App;
