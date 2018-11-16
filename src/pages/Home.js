import React, { Component } from 'react';
import Header from "../components/Header/header";
import Article from "../components/Article/article";
import nyt from "../api/nyt";
import './home.css';

class Home extends Component {
  state = {
    topic: "",
    startYear: "",
    endYear: "",
    articles: [],
  };

  updateTopic(event) {
    this.setState({topic: event.target.value});
  }

  updateStartDate(event) {
    this.setState({startYear: event.target.value});
  }

  updateEndDate(event) {
    this.setState({endYear: event.target.value});
  }

  submitForm() {
    nyt.searchArticles(this.state.topic, this.state.startYear + "0101", this.state.endYear + "1231")
      .then((res) => {
        this.setState({ articles: res.data.response.docs });
      });
  }

  renderArticles() {
    if (this.state.articles.length === 0) {
      return (<div />);
    }

    return (
      <div className="articles_box">
        <h2 className="articles_title">Search</h2>
        {this.state.articles.map((article, i) => {
          if (i > 4) {
            return (null);
          }

          return (
            <Article
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
        <div className="search_box">
          <h2 className="search_title">Results</h2>
          <div className="form-group">
            <p>Topic</p>
            <input className="search_input" onChange={this.updateTopic.bind(this)} />
          </div>
          <div className="form-group">
            <p>Start Year</p>
            <input className="search_input" onChange={this.updateStartDate.bind(this)} />
          </div>
          <div className="form-group">
            <p>End Year</p>
            <input className="search_input" onChange={this.updateEndDate.bind(this)} />
          </div>
          <button className="search_button" onClick={this.submitForm.bind(this)}>Search</button>
        </div>
        {this.renderArticles()}
      </div>
    );
  }
}

export default Home;
