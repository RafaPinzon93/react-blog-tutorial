import React, { Component } from 'react';

class CommentDetail extends Component {
    render() {
        return (
            <div className="comment">
                <a href="/" className="avatar">
                    <img src={this.props.avatar} alt="avatar"/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {this.props.author}
                    </a>
                    <div className="metadata">
                        <span className="date">{this.props.timeAgo}</span>
                    </div>
                    <div className="text">
                        {this.props.text}
                    </div>
                </div>
            </div>
        );
    }
}

export default CommentDetail;
