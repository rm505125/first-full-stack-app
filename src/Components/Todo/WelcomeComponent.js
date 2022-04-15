import { Component } from "react";
import { Link } from "react-router-dom";
class WelcomeComponent extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {};
  // }
  render() {
    return (
      <>
        <h1>Welcome</h1>
        <div>
          Welcome {this.props.params.name}.You can manage your todos{" "}
          <Link to="/todos">here</Link>
        </div>

        <div>
          Click here to get a customized welcome message.
          <button
            onClick={this.retrieveWelcomeMessage}
            className="btn btn-success"
          >
            Get Welcome
          </button>
        </div>
      </>
    );
  }
  retrieveWelcomeMessage = () => {
    console.log("retrieve clicked!");
  };
}
export default WelcomeComponent;
