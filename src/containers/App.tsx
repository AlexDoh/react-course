import * as React from 'react';
import { Component, ComponentState } from 'react';
import '../assets/scss/containers/App.scss';
import Title from '../components/title/Title';
import { ComponentProps } from 'react';
import Article from './Article';
import Comments from './Comments';
import ArticleEntity from '../entity/ArticleEntity';
import { v4 as uuid } from 'uuid';

const title = 'News portal';

export default class App extends Component<ComponentProps<any>, ComponentState> {

  articleLabel: string = 'Zinedine Zidane leaves Real Madrid';
  articleText: string = 'Zinedine Zidane\'s decision to quit Real Madrid just five days after leading the team to their third consecutive Champions League title has thrown the Spanish giants into turmoil.\n' +
    '\n' +
    'Los Blancos president Florentino Perez was obviously stunned by the decision, which Zidane delivered with a notably open and revealing news conference on Thursday lunchtime, and now the Bernabeu top brass have to work hard and work fast to identify and pursue their preferred successor to the Frenchman.';

  articles = [
    new ArticleEntity(uuid(), this.articleText, this.articleLabel),
    new ArticleEntity(uuid(), this.articleText, this.articleLabel)
  ];

  render = (): JSX.Element => (
    <div>
      <Title text={title}/>
      {this.articles.map(article => <Article key={article.id} articleLabel={article.label} articleText={article.text}/>)}
      <Comments/>
    </div>
  );
}
