

const Register = () => {
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
            <h2>Register</h2>
            <div className="form-control">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="input-form"
                placeholder="Enter your Name"
              />
            </div>
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
            <div className="login-button">
              <button>Register</button>
            </div>
            <div className="unregister-btn">
              <span className="not-register-info">Already a member?</span>
              <span className="not-register-link"><a href="register">click here to login</a></span>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register