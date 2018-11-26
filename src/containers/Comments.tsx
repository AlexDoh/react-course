import * as React from 'react';
import { Component, ComponentProps, ComponentState, MouseEvent } from 'react';
import Button from '../shared/button/Button';
import Comment from '../components/comment/Comment';
import CommentEntity from '../entity/CommentEntity';
import { v4 as uuid } from 'uuid';

class Comments extends Component<ComponentProps<any>, ComponentState> {
  constructor(props) {
    super(props);

    this.state = {
      showComments: true
    };
  }

  showComments: boolean = true;
  commentsLength: number = 2;
  commentsLabel: string = `Comments (${this.commentsLength})`;
  commentText: string = 'With one of the biggest jobs in world football suddenly up for grabs, thoughts naturally turned to the candidates, with one name looming large above all others.';

  comments = [
    new CommentEntity(uuid(), this.commentText),
    new CommentEntity(uuid(), this.commentText)
  ];

  toggleComments = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    this.setState(prevState => ({ showComments: !prevState.showComments }));
  };

  componentDidMount = (): void => {
  };

  componentWillUnmount = (): void => {
  };

  render = (): JSX.Element => (
    <div>
      <div className='container'>
        <p className='container__title'>{this.commentsLabel}</p>
        <Button
          onButtonClick={this.toggleComments}
          label={this.state.showComments ? 'hide comments' : 'show comments'}
        />
      </div>
      {this.state.showComments ?
        <div>
          {this.comments.map(comment => <Comment key={comment.id} text={comment.text}/>)}
        </div>
        : null}
    </div>
  );
}

export default Comments;
