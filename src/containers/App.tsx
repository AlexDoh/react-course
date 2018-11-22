import * as React from 'react';
import { Component, ComponentState } from 'react';
import '../assets/scss/containers/App.scss';
import Title from '../components/title/Title';
import { ComponentProps } from 'react';
import Article from './Article';
import Comments from './Comments';

const title = 'News portal';

export default class App extends Component<ComponentProps<any>, ComponentState> {
  render = (): JSX.Element => (
    <div>
      <Title text={title}/>
      <Article/>
      <Comments/>
    </div>
  );
}
