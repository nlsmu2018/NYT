import React, { Component } from 'react';
import './savedarticle.css';

class SavedArticle extends Component {
  render() {
    return (
      <div className="article_box">
        <p><a href={this.props.article.url} target="_blank">{this.props.article.title}</a></p>
      </div>
    );
  }
}

export default SavedArticle;
