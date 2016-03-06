import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

class CommentBox extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    this.state = {data: []};
  }

  componentDidMount() {
    this.setState({data: this.props.data});
  }

  handleCommentSubmit(comment) {
    var comments = this.state.data;
    comment.id = Date.now();
    var newComments = comments.concat([comment]);
    this.setState({data: newComments});
    // TODO: submit to the server and refresh the list
  }

  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    )
  }
}

export default CommentBox;
