class AuthenticationService {
  registerSuccessfulLogin(username, password) {
    console.log("registerSuccessfulLogin");
    sessionStorage.setItem("authenticator", username);
  }
}
export default new AuthenticationService();
