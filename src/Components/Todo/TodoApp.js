import { Component } from "react";
import LoginComponent from "./LoginComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import withNavigation from "./WithNavigation";
import WelcomeComponent from "./WelcomeComponent";
import ErrorComponent from "./ErrorComponent";
import withParams from "./WithParams";
import ListTodosComponent from "./ListTodosComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

class TodoApp extends Component {
  render() {
    const LoginComponentWithNavigation = withNavigation(LoginComponent);
    const WelcomeComponentWithParams = withParams(WelcomeComponent);
    return (
      <div className="TodoApp">
        <Router>
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<LoginComponentWithNavigation />} />
            <Route path="/login" element={<LoginComponentWithNavigation />} />
            <Route
              path="/welcome/:name"
              element={<WelcomeComponentWithParams />}
            />
            <Route path="/todos" element={<ListTodosComponent />} />
            <Route path="*" element={<ErrorComponent />} />
          </Routes>
          <FooterComponent />
        </Router>
      </div>
    );
  }
}

export default TodoApp;
