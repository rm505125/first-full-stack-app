import { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    //this.increment = this.increment.bind(this);
  }
  render() {
    const style = { fontSize: "50px", color: "Red" };
    return (
      <div className="counter">
        <CounterButton
          by={1}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <CounterButton
          by={5}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <CounterButton
          by={10}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />

        {/*
            Not caliing increament method
            We are passing reference as a property
        */}

        <span className="count" style={style}>
          {this.state.counter}
        </span>

        <div>
          <button className="reset" onClick={this.reset}>
            Reset
          </button>
        </div>
      </div>
    );
  }
  increment = (by) => {
    console.log(`increment from child = ${by}`);
    this.setState({
      counter: this.state.counter + by,
    });
  };

  decrement = (by) => {
    this.setState((prevState) => {
      return { counter: this.state.counter - by };
    });
  };
  reset = () => {
    this.setState((prevState) => {
      return { counter: 0 };
    });
  };
}

class CounterButton extends Component {
  constructor() {
    super();
    //     this.state = {
    //       counter: 0,
    //     };
    //     //this.increment = this.increment.bind(this);
  }

  render() {
    //const style = { fontSize: "50px", color: "blue" };

    return (
      <div className="counterButton">
        <button onClick={() => this.props.incrementMethod(this.props.by)}>
          +{this.props.by}
        </button>
        <button onClick={() => this.props.decrementMethod(this.props.by)}>
          -{this.props.by}
        </button>
        {/* <span className="Count" style={style}>
          {this.state.counter}
        </span> */}
      </div>
    );
  }

  //   increment = () => {
  //     this.setState({
  //       counter: this.state.counter + this.props.by,
  //     });

  //     this.props.incrementMethod(this.props.by);
  //   };

  //   decrement = () => {
  //     this.setState({
  //       counter: this.state.counter - this.props.by,
  //     });

  //     this.props.decrementMethod(this.props.by);
  //   };
}

Counter.defaultProps = {
  by: 1,
};
export default Counter;
