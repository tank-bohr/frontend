import React from 'react';
import Divider from 'material-ui/lib/divider';
import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

const style = {
  marginLeft: 20,
};

const buttoStyle = {
  margin: 12,
};

class CommentForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange   = this.handleTextChange.bind(this);
    this.handleSubmit       = this.handleSubmit.bind(this);

    this.state = {author: '', text: ''};
  }

  handleAuthorChange(e) {
    this.setState({author: e.target.value});
  }

  handleTextChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    this.setState({author: '', text: ''});
  }

  render() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit} >
        <Paper zDepth={2} className="commentForm">
          <TextField
            hintText="Your name"
            value={this.state.author}
            onChange={this.handleAuthorChange}
            style={style}
            underlineShow={false}
          />
          <Divider />
          <TextField
            hintText="Say something..."
            value={this.state.text}
            onChange={this.handleTextChange}
            style={style}
            underlineShow={false}
          />
        </Paper>
        <RaisedButton
          label="Post"
          style={buttoStyle}
          onMouseDown={this.handleSubmit}
          secondary={true}
        />
      </form>
    )
  }
}

export default CommentForm;
