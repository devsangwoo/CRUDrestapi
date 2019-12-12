import React from "react";

const PostViewPresenter = ({
  post,
  loading,
  deletePost,
  beforePage,
  updatePost
}) => {
  const renderLoadingBar = () => <div>Loading...</div>;
  const renderPost = () => {
    const { _id, title, description } = post;
    return (
      <>
        <div>
          <h2>{title}</h2>
          <div>
            <div></div>
            <div>{description}</div>
          </div>
          <div>
            <button onClick={() => deletePost(_id)}>삭제버튼</button>
            <button onClick={() => updatePost(_id)}>수정버튼</button>
            <button onClick={() => beforePage()}>이전버튼</button>
          </div>
        </div>
      </>
    );
  };

  return loading ? renderLoadingBar() : renderPost();
};

export default PostViewPresenter;
