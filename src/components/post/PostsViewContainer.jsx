import React, { Component } from "react";
import PostsViewPresenter from "./PostsViewPresenter";
import axios from "axios";

export default class PostsViewContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true
    };
  }

  componentDidMount = () => {
    this.fetchPosts();
  };
  fetchPosts = async () => {
    const response = await axios.get("http://tamastudy.com/api/v1/post");
    this.setState({
      posts: response.data.data,
      loading: false
    });
  };

  render() {
    console.log(this.state.posts);
    const { posts, loading } = this.state;
    return (
      <div>
        <PostsViewPresenter posts={posts} loading={loading} />
      </div>
    );
  }
}
