import * as React from 'react';
import { Component, ComponentProps, ComponentState } from 'react';
import Button from '../../../shared/button/Button';
import '../../../assets/scss/components/ArticleTitle.scss';

class ArticleTitle extends Component<ComponentProps<any>, ComponentState> {
  constructor(props) {
    super(props);

    const { onArticleToggle, label, showArticle } = props;

    this.state = {
      onArticleToggle,
      label,
      showArticle
    };
  }

  showArticleLabel: string = 'show article';
  hideArticleLabel: string = 'hide article';

  componentDidMount = (): void => {
  };

  componentWillUnmount = (): void => {
  };

  render = (): JSX.Element => (
    <div className='container'>
      <h2 className='container__title'>{this.state.label}</h2>
      <Button
        onButtonClick={this.state.onArticleToggle}
        label={this.state.showArticle ? this.showArticleLabel : this.hideArticleLabel}
      />
    </div>
  );
}

export default ArticleTitle;
