import React from 'react';
import PropTypes from 'prop-types';
import s from './ArticleTeaser.css';

class ArticleTeaser extends React.Component {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      attributes: PropTypes.shape({
        title: PropTypes.string.isRequired,
        body: PropTypes.shape({
          summary: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };

  render() {
    const { article } = this.props;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{article.attributes.title}</h1>
          <div
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: article.attributes.body.summary,
            }}
          />
        </div>
      </div>
    );
  }
}

export default ArticleTeaser;
