import * as React from 'react';
import { Component, ComponentProps, ComponentState } from 'react';

class Button extends Component<ComponentProps<any>, ComponentState> {
  constructor(props) {
    super(props);

    const { onButtonClick, label } = props;

    this.state = {
      onButtonClick,
      label
    };
  }

  componentDidMount = (): void => {
  };

  componentWillUnmount = (): void => {
  };

  render = (): JSX.Element => (
    <a
      href=''
      onClick={this.state.onButtonClick}
      className='button'
    >
      {this.state.label}
    </a>
  );
}

export default Button;