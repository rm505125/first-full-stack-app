import { Component } from "react";
import { Link } from "react-router-dom";
import HelloWorldService from "../../api/todo/HelloWorldService";

class WelcomeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      welcomeMessage: "",
      success: false,
    };
    this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
  }
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
          {this.state.success && (
            <div className="container">{this.state.welcomeMessage}</div>
          )}
          {!this.state.success && (
            <div className="container">{this.state.welcomeMessage}</div>
          )}
        </div>
      </>
    );
  }
  retrieveWelcomeMessage = () => {
    // HelloWorldService.executeHelloWorldService()
    //   .then((response) => {
    //     this.handleSuccessfulResponse(response);
    //     console.log(response);
    //   })

    // taking object response
    // HelloWorldService.executeHelloWorldBeanService()
    //   .then((response) => {
    //     this.handleSuccessfulResponse(response);
    //     console.log(response);
    //   })

    console.log(this.props.params.name);
    HelloWorldService.executeHelloWorldPathVariableService(
      this.props.params.name
    )
      .then((response) => {
        console.log(response);
        this.handleSuccessfulResponse(response);
      })
      .catch((error) => this.handleError(error));
  };
  handleSuccessfulResponse(response) {
    this.setState({
      //string response
      //welcomeMessage: response.data,
      // object responce
      welcomeMessage: response.data.message,
      success: true,
    });
  }
  handleError = (error) => {
    console.log(error.response);

    let errorMessage = "";

    if (error.message) {
      errorMessage += error.message;
    }

    if (error.response && error.response.data) {
      errorMessage += error.response.data.message;
    }

    this.setState({ welcomeMessage: errorMessage });
  };
}
export default WelcomeComponent;
