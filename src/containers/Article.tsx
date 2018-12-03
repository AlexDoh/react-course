import * as React from 'react';
import { Component, ComponentProps, ComponentState } from 'react';
import ArticleTitle from '../components/article/article-title/ArticleTitle';
import ArticleText from '../components/article/article-text/ArticleText';

class Article extends Component<ComponentProps<any>, ComponentState> {
  constructor(props) {
    super(props);

    this.state = {
      showArticle: true
    };
  }

  toggleArticle = (event: Event): void => {
    event.preventDefault();
    this.setState(prevState => ({ showArticle: !prevState.showArticle }));
  };

  componentDidMount = (): void => {
  };

  componentWillUnmount = (): void => {
  };

  render = (): JSX.Element => (
    <div>
      <ArticleTitle
        onArticleToggle={this.toggleArticle}
        label={this.props.articleLabel}
        showArticle={this.state.showArticle}
      />
      {this.state.showArticle ? <ArticleText text={this.props.articleText}/> : null}
    </div>
  );
}

export default Article;
