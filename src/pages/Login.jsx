const Login = () => {
  return (
    <>
      <div className="card-section">
        <div className="card-container">
          <div className="card-header"></div>
          <div className="card-body">
            <div className="card-logo">
              <span className="card-logo-name">P</span>
              <span className="card-logo-text">Portfolio Builder</span>
            </div>
            <h2>Login</h2>
            <div className="form-control">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="input-form"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-control">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="input-form"
                placeholder="Enter your password"
              />
            </div>
            <div className="login-button">
              <button>Login</button>
            </div>
            <div className="unregister-btn">
              <span className="not-register-info">not register yet?</span>
              <span className="not-register-link"><a href="register">click here to register</a></span>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
