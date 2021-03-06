import { PropTypes } from 'react';

const dispatcherShape = PropTypes.shape({
  subscribe: PropTypes.func.isRequired,
  perform: PropTypes.func.isRequired
});

export default class Provider {
  static propTypes = {
    dispatcher: dispatcherShape.isRequired,
    children: PropTypes.func.isRequired
  };

  static childContextTypes = {
    redux: dispatcherShape.isRequired
  };

  getChildContext() {
    return { redux: this };
  }

  constructor() {
    this.dispatch = this.dispatch.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    nextProps.dispatcher.hydrate(
      this.props.dispatcher.dehydrate()
    );
  }

  subscribe(listener) {
    return this.props.dispatcher.subscribe(listener);
  }

  dispatch(action) {
    return this.props.dispatcher.dispatch(action);
  }

  perform(actionCreator, ...args) {
    return this.props.dispatcher.perform(actionCreator, ...args);
  }

  render() {
    const { children } = this.props;
    return children();
  }
}
