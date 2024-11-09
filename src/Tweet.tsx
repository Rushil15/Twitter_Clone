// Tweet.js
import React, { useState } from 'react';

/* 
Create a new componnet called 'Tweet' make sure to pass down all the props you will need.
You will also need to use 'useState' for two variables. Then you want to create an event
handler for when the user clicks 'like'. You can ue whatever h1s or h2s or HTML elements that 
you want for your tweet, just make sure all the information from the screenshot I sent is there.
Also, if the post isn't liked already, then you want to display a white heart "🤍" otherwise, 
display a red heart "❤️" make sure to increase or decrease the like counter appropriately.
Theres a 'tweet' class you can use to style your tweet.
*/

// Define the TweetProps interface for the component props
interface TweetProps {
    id: number;
    username: string;
    content: string;
    initialLikes: number;
    timestamp: string;
  }
  
  const Tweet: React.FC<TweetProps> = ({ id, username, content, initialLikes, timestamp }) => {
    // State for tracking like status and like count
    const [isLiked, setIsLiked] = useState(false); // Default: not liked
    const [likeCount, setLikeCount] = useState(initialLikes); // Pass initialLikes prop
  
    // Event handler for toggling like status
    const handleLikeClick = () => {
      if (isLiked) {
        setIsLiked(false);
        setLikeCount(likeCount - 1); // Decrease the like count
      } else {
        setIsLiked(true);
        setLikeCount(likeCount + 1); // Increase the like count
      }
    };
  
    return (
      <div className="tweet">
        <h2>@{username}</h2> {/* Display the username */}
        <p>{content}</p> {/* Display the tweet content */}
        <p>{timestamp} ago</p> {/* Display the timestamp */}
        <div>
          <button onClick={handleLikeClick}>
            {/* Display heart based on like status */}
            {isLiked ? '❤️' : '🤍'}
          </button>
          <span>{likeCount} likes</span> {/* Display the like count */}
        </div>
        
      </div>
    );
  };
export default Tweet;


// export default Tweet;
