import axios from "axios";

class AuthenticationService {
  registerSuccessfulLogin(username, password) {
    //let username = "Rahul";
    //let password = "dummy";
    //let basicAuthHeader = "Basic " + window.btoa(username + ":" + password);
    console.log("registerSuccessfulLogin");
    sessionStorage.setItem("authenticatedUser", username);
    //this.setupAxiosInterceptors(basicAuthHeader);
    this.setupAxiosInterceptors(this.createBasicAuthToken(username, password));
  }

  executeBasicAuthenticationService(username, password) {
    return axios.get("http://localhost:8080/basicauth", {
      headers: { authorization: this.createBasicAuthToken(username, password) },
    });
  }

  createBasicAuthToken(username, password) {
    let basicAuthHeader = "Basic " + window.btoa(username + ":" + password);
    console.log(basicAuthHeader);
    return basicAuthHeader;
  }

  logout() {
    sessionStorage.removeItem("authenticatedUser");
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem("authenticatedUser");
    if (user === null) {
      return false;
    }
    return true;
  }
  getLoggedInUserName() {
    let user = sessionStorage.getItem("authenticatedUser");
    if (user === null) {
      return "";
    }
    return user;
  }
  setupAxiosInterceptors(basicAuthHeader) {
    axios.interceptors.request.use((config) => {
      if (this.isUserLoggedIn) {
        config.headers.authorization = basicAuthHeader;
      }
      return config;
    });
  }
}
export default new AuthenticationService();
