document.addEventListener("DOMContentLoaded", () => {
  Signin.signedInCheck();
  Logout.logoutMethod();
  Signup.signupHandler();
  Signin.signinHandler();
  Profile.profileHandler()
  Store.clickStore()
});
