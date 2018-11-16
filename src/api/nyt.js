import axios from "axios";

let nyt = {
  searchArticles: function(topic, beginDate, endDate) {
    let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    let apiKey = "5f5c99546b374c048ac0d1bea38f99ee";

    return axios.get(url + "?api-key=" + apiKey + "&q=" + topic + "&begin_date=" + beginDate + "&end_date=" + endDate);
  },

  saveArticle: function(title, date, url) {
    return axios.post("http://localhost:4000/api/articles", {
      title: title,
      date: date,
      url: url,
    });
  },

  getArticles: function() {
    return axios.get("http://localhost:4000/api/articles");
  }
};

export default nyt;