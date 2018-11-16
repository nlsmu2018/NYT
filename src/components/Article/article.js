import React, { Component } from 'react';
import './article.css';
import nyt from "../../api/nyt";

class Article extends Component {
  state = {
    saved: false,
  };

  saveArticle() {
    nyt.saveArticle(this.props.article.headline.main, this.props.article.pub_date, this.props.article.web_url)
      .then((res) => {
        this.setState({ saved: true });
      });
  }

  renderButton() {
    if (this.state.saved) {
      return (
        <button className="save_article_button">Article Saved</button>
      );
    } else {
      return (
        <button className="save_article_button" onClick={this.saveArticle.bind(this)}>Save Article</button>
      );
    }
  }

  render() {
    return (
      <div className="article_box">
        <p><a href={this.props.article.web_url} target="_blank">{this.props.article.headline.main}</a></p>
        {this.renderButton()}
      </div>
    );
  }
}

export default Article;
