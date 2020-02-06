import React from 'react';

class Timer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { secondes : 0 };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState(state => ({
      secondes: state.secondes + 1
    }));
  }

  render() {
    return (
      <div data-testid="timer">
        Il s'est écoulé {this.state.secondes} secondes depuis votre arrivée sur la page.
      </div>
    );
  }
}

export default Timer;

