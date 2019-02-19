import React, { Component } from 'react';
// import CommentDetail from './CommentDetail';
// import ApprovalCard from './ApprovalCard';
// import faker from 'faker';
import PostList from './PostList';

class App extends Component {
  render() {
    return (
      <div className="ui container comments">
        {/* <ApprovalCard></ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Rafa"
          text="Hey im Rafa"
          timeAgo="Today at 5:00"
        >
        </CommentDetail>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Laura"
          text="Hey im Laura"
          timeAgo="Today at 5:00"
        >
        </CommentDetail> */}
        <PostList />
      </div>
    );
  }
}

export default App;
