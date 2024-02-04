const Home = () => {
  return (
    <>
      <main className="container">
        <nav className="navbar">
          <div className="nav-logo">P</div>
          <span className="nav-text">Portfolio Builder</span>
        </nav>
        <section className="main-body">
          <div className="info-banner">
            <div className="about">
              <div className="portfolio-heading">
                <span className="portfolio-text">Portfolio</span>
                <span className="builder-text">Builder</span>
                <span className="app-text">App</span>
              </div>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here, content here.
              </p>
              <div className="btn-div">
            <a className="btn" href="login">Login</a>
            <a className="btn" href="register">Register</a>
          </div>
            </div>
            <div className="image-section">
              <img
                src="/public/milestone.jpg"
                width="300px"
                alt=""
              />
            </div>
          </div>

         
        </section>

        <footer className="footer">
         <h1>Portfolio Builder</h1>
        
         <div className="footer-menu">
          <ul>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Email</a></li>
            <li><a href="#">Geo-Location</a></li>
          </ul>
         </div>
        </footer>
      </main>
    </>
  );
};

export default Home;
