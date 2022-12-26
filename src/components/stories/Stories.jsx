import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { stories } from "../../tempdata";
import "./Stories.scss";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt={story.name} />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
