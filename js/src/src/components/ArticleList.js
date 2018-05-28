import React from 'react';
import PropTypes from 'prop-types';
import s from './ArticleList.css';
import api from '../utils/api.js';
import ArticleTeaser from './ArticleTeaser';

class ArticleList extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  /**
   * Returns the JSON API endpoint
   * with optional params like filter, sort, ...
   *
   * @param params
   * @returns {string}
   */
  static getArticlesEndpoint(params = '') {
    return `${api.getApiBaseUrl()}/jsonapi/node/article${params}`;
  }

  /**
   * Returns the entity id passed to the react container as a data attribute.
   *
   * @returns {number}
   */
  static getCurrentEntityId() {
    return document.getElementById(api.getAppContainerId()).getAttribute('data-entity-id');
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      hasError: false,
      isLoading: true,
    };
  }

  componentDidMount() {
    const articlesEndpoint = ArticleList.getArticlesEndpoint();
    this.fetchArticles(articlesEndpoint);
  }

  /**
   * Fetches articles data.
   *
   * @param endpoint
   */
  fetchArticles(endpoint) {
    this.setState({ isLoading: true });
    fetch(endpoint)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      // ES6 property value shorthand for { articles: articles }
      // and optionally use the second parameter as a callback.
      .then(articles => {
        // this.setState({ articles }, this.setArticlesWithIncludedUrl);
        this.setState({ articles });
        this.setState({ isLoading: false });
      })
      .catch(() => this.setState({ hasError: true }));
  }

  render() {
    console.log(ArticleList.getCurrentEntityId());
    const { title } = this.props;

    if (this.state.hasError) {
      return <p>Error while loading articles.</p>;
    }

    if (this.state.isLoading) {
      return <p>Loading articles from JSON API...</p>;
    }

    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{title}</h1>
        </div>
        {this.state.articles.data.map(article => (
          <ArticleTeaser key={article.id} article={article} />
        ))}
      </div>
    );
  }
}

export default ArticleList;
