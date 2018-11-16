import React, { Component } from 'react';
import Header from "../components/Header/header";
import nyt from "../api/nyt";
import SavedArticle from "../components/SavedArticle/savedarticle";

class Saved extends Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    nyt.getArticles()
      .then((res) => {
        this.setState({ articles: res.data });
      });
  }

  renderArticles() {
    if (this.state.articles.length === 0) {
      return (<div />);
    }

    return (
      <div className="articles_box">
        <h2 className="articles_title">Saved Articles</h2>
        {this.state.articles.map((article, i) => {
          if (i > 4) {
            return (null);
          }

          return (
            <SavedArticle
              key={article.uri}
              article={article}
            />
          );
        })}
      </div>
    );
  }

  render() {
    return (
      <div>
        <Header/>
        {this.renderArticles()}
      </div>
    );
  }
}

export default Saved;
