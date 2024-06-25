import React from 'react';
import BookmarkButton from './BookmarkButton';

const StoryPage = ({ storyId, title, content }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
      <BookmarkButton storyId={storyId} />
    </div>
  );
};

export default StoryPage;
