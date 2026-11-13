import React from "react";
import {
  FaRegHeart,
  FaRegComment,
  FaRegPaperPlane,
  FaRegBookmark,
} from "react-icons/fa";
const post = () => {
  return (
    <div className="post">
      <div className="user">
        <div className="img-wrap">
          <img
            src="https://images.unsplash.com/photo-1790274742754-8e4570362ffa?q=80&w=687&auto=format&fit=crop"
            alt=""
          />
        </div>
        <p>Username</p>
      </div>

      <img
        className="post-img"
        src="https://images.unsplash.com/photo-1790274742754-8e4570362ffa?q=80&w=687&auto=format&fit=crop"
        alt=""
      />

      <div className="post-actions">
        <div className="left-actions">
          <button>
            <FaRegHeart />
          </button>
          <button>
            <FaRegComment />
          </button>
          <button>
            <FaRegPaperPlane />
          </button>
        </div>

        <button className="save">
          <FaRegBookmark />
        </button>
      </div>

      <div className="bottom">
        <p className="likes">120 likes</p>
        <p className="caption">
          <strong>Username</strong> Lorem ipsum dolor sit.
        </p>
      </div>
    </div>
  );
};

export default post;
