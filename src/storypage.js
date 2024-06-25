import React from 'react';
import BookmarkButton from './BookmarkButton';
import './StoryPage.css'; // Import file CSS

const StoryPage = ({ storyId, name, content }) => {
  return (
    <div className="story-page-container">
      <h1 className="story-page-title">{name}</h1>
      <p className="story-page-content">{content}</p>
      <BookmarkButton storyId={storyId} />
    </div>
  );
};

export default StoryPage;
