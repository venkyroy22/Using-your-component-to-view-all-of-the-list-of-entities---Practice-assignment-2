import React from "react";
import LikeButton from "./likebutton";
import "../App.css"

function PostCard({ post }) {
  return (
    <div style={styles.card}>
      <img src={post.profilePic} alt="Profile" style={styles.profilePic} />
      <div style={styles.content}>
        <h3 style={styles.username}>{post.username}</h3>
        <p style={styles.text}>{post.content}</p>
        <LikeButton />
      </div>
    </div>
  );
}

const styles = {
  card: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "16px",
    margin: "10px",
    backgroundColor: "#f9f9f9",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
    width: "400px",
  },
  profilePic: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    marginRight: "12px",
  },
  content: {
    flex: 1,
  },
  username: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "4px",
    color: "#333"
  },
  text: {
    fontSize: "16px",
    color: "#333",
    marginBottom: "8px",
  },
};

export default PostCard;
