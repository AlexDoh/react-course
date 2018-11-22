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

  articleLabel: string = 'Zinedine Zidane leaves Real Madrid';
  articleText: string = 'Zinedine Zidane\'s decision to quit Real Madrid just five days after leading the team to their third consecutive Champions League title has thrown the Spanish giants into turmoil.\n' +
    '\n' +
    'Los Blancos president Florentino Perez was obviously stunned by the decision, which Zidane delivered with a notably open and revealing news conference on Thursday lunchtime, and now the Bernabeu top brass have to work hard and work fast to identify and pursue their preferred successor to the Frenchman.';

  toggleArticle = (event: Event): void => {
    event.preventDefault();
    this.setState(prevState => ({ showComments: !prevState.showComments }));
  };

  componentDidMount = (): void => {
  };

  componentWillUnmount = (): void => {
  };

  render = (): JSX.Element => (
    <div>
      <ArticleTitle
        onArticleToggle={this.toggleArticle}
        label={this.articleLabel}
        showArticle={this.state.showArticle}
      />
      {this.state.showArticle ? <ArticleText text={this.articleText}/> : null}
    </div>
  );
}

export default Article;
