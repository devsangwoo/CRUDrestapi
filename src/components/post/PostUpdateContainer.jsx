import React, { Component } from "react";
import axios from "axios";

export default class PostUpdateContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    };
  }

  componentDidMount = () => {
    this.fetchPost();
  };
  fetchPost = async () => {
    const postId = this.props.match.params.postId;
    const response = await axios.get(
      `http://tamastudy.com/api/v1/post/${postId}`
    );
    this.setState({
      title: response.data.data.title,
      description: response.data.data.description
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSumbit = async event => {
    try {
      event.preventDefault();
      const body = {
        title: this.state.title,
        description: this.state.description
      };
      const response = await axios.put(
        `http://tamastudy.com/api/v1/post/${this.props.match.params.postId}`,
        body
      );
      this.props.history.push(`/posts/${response.data.data._id}`);
      console.log(response.data.data._id);
    } catch (error) {}
  };
  render() {
    console.log(this.props.match.params.postId);
    return (
      <div>
        <form
          onSubmit={event => {
            this.handleSumbit(event);
          }}
        >
          <div>
            <label>title : </label>
            <input
              type="text"
              name="title"
              onChange={event => {
                this.handleChange(event);
              }}
              value={this.state.title}
            />
          </div>
          <div>
            <label>discription : </label>
            <input
              type="text"
              name="description"
              onChange={event => {
                this.handleChange(event);
              }}
              value={this.state.description}
            />
          </div>
          <div>
            <button type="submit">글 수정</button>
          </div>
        </form>
      </div>
    );
  }
}
