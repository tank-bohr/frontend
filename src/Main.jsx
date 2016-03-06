import React from 'react';
import CommentBox from './CommentBox';

var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

class Main extends React.Component {
  render() {
    return (
      <CommentBox data={data} />
    )
  }
}

export default Main;
