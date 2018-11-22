import * as React from 'react';
import Button from '../../../shared/button/Button';
import '../../../assets/scss/components/ArticleTitle.scss';

const ArticleTitle = ({ onArticleToggle, label, showArticle }): JSX.Element => (
    <div className='container'>
      <h2 className='container__title'>{label}</h2>
      <Button
        onButtonClick={onArticleToggle}
        label={showArticle ? 'show article' : 'hide article'}
      />
    </div>
  );

export default ArticleTitle;