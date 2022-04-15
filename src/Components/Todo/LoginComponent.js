import { Component } from "react";

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Rahul",
      password: "",
      hasLoginFailed: false,
      showSuccessMessage: false,
    };
  }
  render() {
    return (
      <div>
        {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} />
        <ShowLoginSuccessMessage
          showSuccessMessage={this.state.showSuccessMessage}
        /> */}
        {this.state.hasLoginFailed && <div>Invalid Credentials!</div>}
        {this.state.showSuccessMessage && <div>Login successful!</div>}
        User Name :
        <input
          type="text"
          name="username"
          value={this.state.username}
          // onChange={this.handleUsernameChange}
          onChange={this.handleChange}
        />
        Password :{" "}
        <input
          type="password"
          name="password"
          value={this.state.password}
          //   onChange={this.handlePasswordChange}
          onChange={this.handleChange}
        />
        <button onClick={this.loginClicked}>Login</button>
      </div>
    );
  }

  /**
   * For handling all the changes
   *
   */
  handleChange = (event) => {
    //console.log(this.state);
    {
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
  };

  loginClicked = (event) => {
    console.log(this.state);
    if (this.state.username === "Rahul" && this.state.password === "dummy") {
      //console.log("Login successful!");
      this.props.navigate(`/welcome/${this.state.username}`);
      this.setState({
        showSuccessMessage: true,
        hasLoginFailed: false,
      });
    } else {
      console.log("Invalid credentials!");
      this.setState({
        showSuccessMessage: false,
        hasLoginFailed: true,
      });
    }
  };

  /*
  handleUsernameChange = (event) => {
    console.log(event.target.name);
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = (event) => {
    console.log(event.target.value);
    this.setState({
      password: event.target.value,
    });
  };
  */
}
/**
function ShowInvalidCredentials(props) {
  if (props.hasLoginFailed) {
    return <div>Invalid Credentials</div>;
  } else {
    return null;
  }
}
function ShowLoginSuccessMessage(props) {
  if (props.showSuccessMessage) {
    return <div>Login successful!</div>;
  } else {
    return null;
  }
} 
*/

export default LoginComponent;
