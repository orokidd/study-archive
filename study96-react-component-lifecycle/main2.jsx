// Example of React component lifecycle using class components
// Demonstrates mounting, updating, and unmounting phases
import React, { Component } from "react";

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("🔹 constructor: component is being created");
  }

  componentDidMount() {
    console.log("🔹 componentDidMount: component mounted to DOM");
    // Good for data fetching, subscriptions, timers
    this.timer = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 2000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("🔹 shouldComponentUpdate: decide if re-render is needed");
    return true; // returning false prevents re-render
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("🔹 getSnapshotBeforeUpdate: capture info before DOM updates");
    return null; // e.g., scroll position
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("🔹 componentDidUpdate: component updated");
  }

  componentWillUnmount() {
    console.log("🔹 componentWillUnmount: cleanup before removal");
    clearInterval(this.timer); // cleanup timer
  }

  render() {
    console.log("🔹 render: rendering UI");
    return (
      <div>
        <h2>Lifecycle Demo</h2>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}

export default LifecycleDemo;
