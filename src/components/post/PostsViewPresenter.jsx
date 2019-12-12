import React from "react";
import { Link } from "react-router-dom";

const PostsViewPresenter = ({ posts, loading }) => {
  if (posts.length === 0) {
    return <div>포스트가 존재하지않습니다.</div>;
  }
  console.log(posts);
  const renderLoadingBar = () => <div>Loading...</div>;
  const renderPosts = () => (
    <div>
      <div>
        <Link to="/posts/create">글 작성</Link>
      </div>
      {posts.map(post => {
        const { _id, title, description } = post;
        return (
          <div key={_id}>
            <h2>
              <Link to={`/posts/${_id}`}>{title}</Link>
            </h2>
            <div>{description}</div>
            <div></div>
          </div>
        );
      })}
    </div>
  );

  return loading && posts.length === 0 ? renderLoadingBar() : renderPosts();
};

export default PostsViewPresenter;

//로직을써야한다 =>{} 리턴값필요
//그냥 값을 보낸다 =>() 리턴값필요업슴
