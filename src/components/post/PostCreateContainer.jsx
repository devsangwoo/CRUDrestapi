import React, { Component } from "react";
import axios from "axios";

export default class PostCreateContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    };
  }
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
      const response = await axios.post(
        "http://tamastudy.com/api/v1/post",
        body
      );
      this.props.history.push(`/posts/${response.data.data._id}`);
      console.log(response.data.data._id);
    } catch (error) {}
  };
  render() {
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
            <button type="submit">글 작성</button>
          </div>
        </form>
      </div>
    );
  }
}
