import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

import FirstComponent from "./Components/learning-examples/FirstComponent";
import SecondComponent from "./Components/learning-examples/SecondComponent";
import Counter from "./Components/Counter/Counter";
import TodoApp from "./Components/Todo/TodoApp";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <TodoApp />
    </div>
  );
}

// funtional component
// function FirstComponent() {
//   return (
//     <div className="firstComponent">
//       <p>FirstComponent</p>
//     </div>
//   );
// }

// Class component
// class SecondComponent extends Component {
//   render() {
//     return (
//       <div className="secondComponent">
//         <p>SecondComponent</p>
//       </div>
//     );
//   }
// }

class LearningComponents extends Component {
  render() {
    return (
      <div className="LearningComponents">
        <p>Hello World!</p>
        <FirstComponent />
        <SecondComponent />
      </div>
    );
  }
}

export default App;
