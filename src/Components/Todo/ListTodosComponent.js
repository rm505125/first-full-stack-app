import moment from "moment";
import { Component } from "react";
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService";
class ListTodosComponent extends Component {
  constructor() {
    //console.log("constructor");
    super();
    this.state = {
      todos: [
        // {
        //   id: 1,
        //   description: "Learn React",
        //   done: false,
        //   targetDate: new Date(),
        // },
        // {
        //   id: 2,
        //   description: "Become an Expert at React",
        //   done: false,
        //   targetDate: new Date(),
        // },
        // {
        //   id: 3,
        //   description: "Visit India",
        //   done: false,
        //   targetDate: new Date(),
        // },
      ],
      message: null,
    };
  }
  // componentWillUnmount() {
  //   console.log("componentWillUnmount");
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("shouldComponentUpdate");
  //   console.log(nextProps);
  //   console.log(nextState);
  //   return true; // false
  // }

  componentDidMount() {
    // console.log("componentDidMount");
    this.refreshTodos();
  }

  refreshTodos = () => {
    let username = AuthenticationService.getLoggedInUserName();
    TodoDataService.retrieveAllTodos(username).then((response) => {
      //console.log(response);
      this.setState({
        todos: response.data,
      });
    });
  };
  render() {
    //console.log("render");
    return (
      <div className="list">
        <h1>List Todos</h1>
        {this.state.message && (
          <div className="alert alert-success">{this.state.message}</div>
        )}
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                {/* <th>id</th> */}
                <th>description</th>
                <th>Is Completed?</th>
                <th>Target Date</th>
                <th>Delete</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todos.map((todo) => (
                <tr key={todo.id}>
                  {/* <td>{todo.id}</td> */}
                  <td>{todo.description}</td>
                  <td>{todo.done.toString()}</td>
                  {/* <td>{todo.targetDate.toString()}</td> */}
                  <td>{moment(todo.targetDate).format("YYYY-MM-DD")}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => this.updateTodoClicked(todo.id)}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => this.deleteTodoClicked(todo.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="row">
            <button className="btn btn-success" onClick={this.addTodoClicked}>
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }

  deleteTodoClicked = (id) => {
    const username = AuthenticationService.getLoggedInUserName();
    console.log(username + "  " + id);
    TodoDataService.deleteTodo(username, id).then((response) => {
      this.setState({
        message: `Delete of todo ${id} Successful!`,
      });
      this.refreshTodos();
    });
  };

  updateTodoClicked = (id) => {
    console.log("update" + id);
    this.props.navigate(`/todos/${id}`);
  };
  addTodoClicked = () => {
    //console.log("create");
    this.props.navigate(`/todos/-1`);
  };
}
export default ListTodosComponent;
