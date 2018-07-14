import React, { Component } from "react";
import { actions, connect, render } from "mirrorx";
import styled from "styled-components";

import "./styles.css";
import "../models/appModel";

const Comment = styled.div`
  display: flex;
  flex-direction: column;
`;

class Comments extends Component {
  componentDidMount = async () => {
    await actions.app.addPostsAsync();
  };

  render() {
    const { comments } = this.props;
    console.log(comments);

    const commentComponents = comments.map(({ id, name, email, body }) => (
      <Comment key={id}>
        <h3>{name}</h3>
        <span>{email}</span>
        <div>{body}</div>
      </Comment>
    ));

    return <div>{commentComponents}</div>;
  }
}

const App = connect(state => ({ comments: state.app.comments }))(Comments);

const rootElement = document.getElementById("root");
render(<App />, rootElement);
