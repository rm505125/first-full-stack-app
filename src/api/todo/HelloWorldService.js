import axios from "axios";

class HelloWorldService {
  // string response
  executeHelloWorldService() {
    //console.log("HelloWorldService");
    return axios.get("http://localhost:8080/hello-world");
  }
  // object response
  executeHelloWorldBeanService() {
    //console.log("HelloWorldService");
    return axios.get("http://localhost:8080/hello-world-bean");
  }
  // pathvariable response
  executeHelloWorldPathVariableService(name) {
    //console.log("HelloWorldService");
    return axios.get(
      `http://localhost:8080/hello-world-bean/path-variable/${name}`
    );
  }
}
export default new HelloWorldService();
