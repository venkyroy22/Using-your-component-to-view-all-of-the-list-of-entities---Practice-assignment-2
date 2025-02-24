import React from "react";
import PostCard from "./components/postcard";

const posts = [
  { 
    id: 1, 
    username: "Tim", 
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
    content: "Had a great day at the beach! "
  },
  { 
    id: 2, 
    username: "Harlie", 
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
    content: "Just finished reading an amazing book! "
  },
  { 
    id: 3, 
    username: "Harry", 
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
    content: "Excited for my next adventure! "
  }
];

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Social Media Feed</h1>
      <div>
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
  }
};

export default App;
