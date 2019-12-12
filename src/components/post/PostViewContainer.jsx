import React, { Component } from "react";
import PostViewPresenter from "./PostViewPresenter";
import Axios from "axios";

export default class PostViewContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
      loading: true
    };
  }

  componentDidMount = () => {
    this.fetchPost();
  };
  fetchPost = async () => {
    const postId = this.props.match.params.postId;
    const response = await Axios.get(
      `http://tamastudy.com/api/v1/post/${postId}`
    );
    this.setState({
      post: response.data.data,
      loading: false
    });
  };
  deletePost = async id => {
    alert(`${id}번 포스트를 삭제하시겠습니까?`);
    // const postId = this.props.match.params.postId;
    await Axios.delete(`http://tamastudy.com/api/v1/post/${id}`);
    this.props.history.push("/posts");
  };
  updatePost = id => {
    this.props.history.push(`/posts/${id}/update`);
  };

  beforePage = () => {
    this.props.history.push("/posts");
  };
  render() {
    console.log(this.props);
    const { post, loading } = this.state;
    const { deletePost, beforePage, updatePost } = this;
    return (
      <div>
        <PostViewPresenter
          post={post}
          loading={loading}
          deletePost={deletePost}
          beforePage={beforePage}
          updatePost={updatePost}
        />
      </div>
    );
  }
}
