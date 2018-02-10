import React from 'react';
import ReactDOM from 'react-dom';

const START_TIME = 10;

var Timer = React.createClass({
  getInitialState: function() {
    return {
      time: START_TIME,
      timer: null,
      timerIsRunning: false,
      startToResume: false
    };
  this.beginTimer = this.beginTimer.bind(this);
  this.startCounter = this.startCounter.bind(this);
  this.pauseTimer = this.pauseTimer.bind(this);
  this.resetTimer = this.resetTimer.bind(this);
  },

  beginTimer: function() {
    this.setState({
      timer: this.startCounter(this.state.time),
      timerIsRunning: true
    });
  },

  startCounter: function(currentTime) {
    return setInterval(function() {
      currentTime--;
      this.setState({
        time: currentTime
      });
    }.bind(this), 1000);
  },

  pauseTimer: function() {
    this.setState({
      timerIsRunning: false,
      startToResume: true
    });
    clearInterval(this.state.timer);
  },

  resetTimer: function() {
    this.setState({
      time: START_TIME,
      timer: null,
      timerIsRunning: false,
      startToResume: false
    });
  },

  render: function() {
    const time = this.state.time;
    if (time === 0) {
      clearInterval(this.state.timer);
    }
    const timeString = `${time} sec${time !== 1 ? "s" : ""}`;
    const timeOutput = `${time === 0
      ? "done!"
      : timeString}`;

    return (
      <div>
        <h1>Timer</h1>
        <h3>{timeOutput}</h3>
        <button onClick={this.beginTimer} disabled={this.state.timerIsRunning && true}>
          {this.state.startToResume ? "Resume" : "Start"}
        </button>
        <button onClick={this.pauseTimer} disabled={time === 0 && true}>
          Pause
        </button>
        <button onClick={this.resetTimer} disabled={this.state.timerIsRunning && time !== 0 && true}>
          Reset
        </button>
        <h3>{this.state.output}</h3>
      </div>
    );
  }
});
ReactDOM.render(<Timer />, document.getElementById('content'));
